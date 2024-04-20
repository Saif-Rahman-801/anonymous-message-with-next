import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username should be minimum 2 characters or more")
  .max(20, "user name must not contain more than 20 charcters")
  .regex(/^[a-zA-Z0-9]+$/, "user name must not contain any special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid user email" }),
  password: z
    .string()
    .min(6, "Password should contain at least 6 characters or more"),
});
