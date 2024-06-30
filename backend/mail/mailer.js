const mail = require('nodemailer');

const sendEmail = async (to, subject, message) => {
    let transporter = new mail.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'your email',
        pass: 'pass code (not passsword)'
      }
    });
  
    let mailOptions = {
      from: 'ryuxkunz@gmail.com',
      to: to,
      subject: subject,
      text: message
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + to);
      }
    });
}

module.exports = { sendEmail }