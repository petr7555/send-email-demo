// send.js
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // https://nodemailer.com/transports/sendmail/
  const transporter = nodemailer.createTransport({
    sendmail: true,
  });

  // send an email
  const info = await transporter.sendMail({
    from: '"Fred Blogger" <sender@example.com>',
    to: "peta.janik@email.cz", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Message sent using sendmail.", // plain text body
    html: "<b>Message sent using sendmail.</b>" // html body
  }, (err, info) => {
    if (err){
      console.error("err", err);
    }
    console.log(info.envelope);
  });

  console.log("Message sent.");
}

main().catch(console.error);
