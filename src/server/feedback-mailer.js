const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
  },
});

async function enviarCorreoElectronico(destinatario, mensaje) {
  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      to: destinatario,
      subject: 'Muchas gracias por tu feedback',
      text: mensaje,
    });
    console.log('Correo electrónico enviado correctamente a', destinatario);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
}

module.exports = enviarCorreoElectronico;
