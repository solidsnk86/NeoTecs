import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
  },
});

async function enviarCorreoElectronico(email, nombre) {
  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      to: email,
      subject: 'Muchas gracias por tu feedback',
      text: `Buenas ${nombre}! He recibido este feedback desde NeoTecs. ¡Gracias por tomarte el tiempo para proporcionar tus comentarios! Estaremos revisando tu mensaje y trabajando para mejorar nuestra experiencia en línea. ¡Esperamos verte pronto en nuestro sitio web!`,
    });
    console.log('Correo electrónico enviado correctamente a', destinatario);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
}

export default enviarCorreoElectronico;
