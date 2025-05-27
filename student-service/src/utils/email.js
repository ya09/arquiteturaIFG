const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "seu_email@gmail.com",
    pass: "sua_senha",
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "seu_email@gmail.com",
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
