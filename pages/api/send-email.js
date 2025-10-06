import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, subject, html, text, from, replyTo, recaptchaToken } = req.body;

    const verifyResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    const data = await resend.emails.send({
      to: process.env.TO_EMAIL,
      subject: process.env.EMAIL_SUBJECT,
      html: html,
      text: text,
      from: `Tech Meowt <${process.env.FROM_EMAIL}>`,
      replyTo: replyTo,
    });

    return res.status(200).json({ success: true, data });
    console.log(`Form + reCAPTCHA success`);
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({ success: false, error: error.message });
  }
}
