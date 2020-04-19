const nodemailer = require("nodemailer");
async function sendMail() {
  //  1. transport => configuration
  // configurations set email
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5bc7f6bb8f9a36",
      pass: "2a0d2c25c2ad0a"
    }
  });
  //2. parameters
  const mailOptions = {
    from: "customersupport@everyone.com",
    to: "abc@gmail.com",
    subject: "My First Email",
    html: "<h1>This was my first Email send through nodeJS</h1>",
    text: "This was my first Email send through nodeJS with only text"
  }
  // 3. sendMail
  await transport.sendMail(mailOptions);
}
sendMail().then(function () {
  console.log("Email Has been send");
}).catch(function (err) {
  console.log(err);
})