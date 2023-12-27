



import type { NextApiRequest, NextApiResponse } from 'next';
import nodeMailer from 'nodemailer';

const anubis = 'p.sivak91@gmail.com';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(401).json({
      success: false,
      message: 'Invalid request method!',
    });
  }

  const { name, email, msg } = req.body;
  console.log(name, email, msg);

  try {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.user, // Ensure these environment variables are set
        pass: process.env.pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: `${email}`,
      to: anubis,
      subject: "Foxxy",
      text: "Foxxy",
      html: `
        <b>Contact Form</b><br/>
        <b>Name: ${name} </b><br/>
        <b>Email: ${email} </b><br/>
        <b>Subject: Foxxy </b><br/>
        <b>Message: ${msg} </b><br/>
      `,
    });

    return res.status(201).json({
      success: true,
      message: `The email has been sent! We will contact you shortly!`,
    });
    
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      success: false,
      message: 'Server error! Try it later.',
    });
  }
};

export default handler;
