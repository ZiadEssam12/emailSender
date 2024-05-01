import asyncHandler from "../../utils/asyncHandler.js";
import sendingEmail from "../../utils/sendingEmail.js";
import sgMail from "@sendgrid/mail";

export const sendEmail = asyncHandler(async (req, res, next) => {
  // const resposne = sendingEmail({
  //   to: req.body.to,
  //   subject: req.body.subject,
  //   text: req.body.text,
  // });
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: req.body.to,
    from: "lrtadj0@gmail.com", // Change to your verified sender
    subject: req.body.subject,
    text: "and easy to do anywhere, even with Node.js",
  };
  sgMail
    .send(msg)
    .then(() => {
      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    })
    .catch((error) => {
      for (const e of error.response.body.errors) {
        console.error(e);
      }
    });
});
