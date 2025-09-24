import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method != 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, subject, html, text, from, replyTo } = req.body;

    const data = await resend.emails.send({
      to: process.env.TO_EMAIL,
      subject: process.env.EMAIL_SUBJECT,
      html: html,
      text: text,
      from: process.env.FROM_EMAIL,
      replyTo: replyTo,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(`Error sending email ${error}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};
