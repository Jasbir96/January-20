const nodemailer = require("nodemailer");
const config = require("../configs/config");
module.exports = async function emailSender(options) {
  //  1. transport => configuration
  // configurations set email
  const transport = nodemailer.createTransport({
    tls: {
      rejectUnauthorized: false
    },secure:false,
    service: "gmail",
    auth: {
      // email Id
      user: config.EMAIL_ID,
      // app password
      pass: config.EMAIL_PASSWORD
    }
  });
  //2. parameters
  const mailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    html: options.html
  }
  // 3. sendMail
  await transport.sendMail(mailOptions);
}
