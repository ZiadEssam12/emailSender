import { Router } from "express";
import * as emailController from "./email.controller.js";
import * as emailSchema from "./email.schema.js";
import  validate  from "../../middleware/validation.middleware.js";
const router = Router();

router.post(
  "/",
  validate(emailSchema.sendEmail),
  emailController.sendEmail
);

export default router;
