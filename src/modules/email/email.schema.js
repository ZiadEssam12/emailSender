import joi from "joi";

export const sendEmail = joi.object({
  from: joi.string().email().required(),
  to: joi.string().email().required(),
  subject: joi.string().required(),
  text: joi.string().required(),
});
