var mailgun = require("mailgun-js")({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN,
});

const sendEmail = async options => {
  // send mail with defined transport object
  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  mailgun.messages().send(message, (error, body) => {
    console.log(body);
  });
};

//   const info = await transporter.sendMail(message);

//   console.log("Message sent: %s", info.messageId);
// };

module.exports = sendEmail;
