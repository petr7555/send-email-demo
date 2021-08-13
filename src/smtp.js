// send.js
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
  // the settings could come from .env file or environment variables
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 7777,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "abc",
      pass: "def",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  })

  // send an email
  const info = await transporter.sendMail({
    from: '"Fred Blogger" <sender@example.com>',
    to: "peta.janik@email.cz", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Message sent using SMTP server.", // plain text body
    html: "<b>Message sent using SMTP server.</b>" // html body
  }, (err, info) => {
    if (err){
      console.error("err", err);
    }
    console.log(info.envelope);
  });

  console.log("Message sent.");
}

main().catch(console.error);
