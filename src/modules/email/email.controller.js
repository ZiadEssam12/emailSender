import asyncHandler from "../../utils/asyncHandler.js";
import sendingEmail from "../../utils/sendingEmail.js";

export const sendEmail = asyncHandler(async (req, res, next) => {
  const resposne = sendingEmail({
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
  });

  return res
    .status(200)
    .json({ success: true, message: "Email sent successfully" });
});
