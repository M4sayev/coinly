import { z } from "zod";

export const userSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(5, { message: "password should be at least 6 characters long" }),
});

export const userSingupSchema = userSchema.extend({
  terms: z.boolean().refine((val) => val === true, {
    message: "You have to agree to our terms and privacy policy to proceed.",
  }),
});

export const emailOnlySchema = userSchema.pick({ email: true });
