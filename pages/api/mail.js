import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const { email, message, fullName, phone } = req.body
  
  try {
    console.log('Req body: ', req.body)
    await sendgrid.send({
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      reply_to: email,
      subject: 'New Contact Form',
      html: `<div>Name: ${req.body.fullName} <br />Email: ${req.body.email} <br />Phone: ${req.body.phone} <br />Message: ${req.body.message}</div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: '' })
}

export default sendEmail;
