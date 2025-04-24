const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = async (email) => {
  try {
    const msg = {
      to: email,
      from: {
        name: "Finverse",
        email: process.env.EMAIL_SENDER,
      },
      templateId: process.env.WAITLIST_TEMPLATE_ID,
    };
    await sgMail.send(msg);
    // console.log("Email sent successfully", msg);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
module.exports = sendEmail;
//
