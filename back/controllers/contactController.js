import nodemailer from 'nodemailer';




const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'nardak1993@gmail.com',
    pass: 'zrhoulltzqdqfout'
  }
});

// Cette fonction est appelée par le routeur lorsqu'un utilisateur soumet le formulaire de contact


const submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

 
  const mailOptions = {
    from: email,
    to: 'nardak1993@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Envoi de l'email a mon adresse email


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
};

// Exportation de la fonction submitContactForm

export default submitContactForm;
