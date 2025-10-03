export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(504).json({ message: 'Method not allowed' });
  }

  const { recaptchaToken } = req.body;
  
  try {
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

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}
