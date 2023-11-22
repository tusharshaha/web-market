import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string()
    .email()
    .regex(
      new RegExp(/^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/),
      "Excepted gmail, yahoo, hotmail and outlook only"
    ),
  password: z.string()
    .regex(
      new RegExp(/^(?=.*[a-z])(?=.*\d).{6,}$/),
      "Password must be 6 characters with 1 letter and 1 digit."
    ),
});

export const regFormSchema = z.object({
  name: z.string().min(3, "Name must contain at least 3 character(s)").max(100),
}).merge(loginFormSchema);

export type RegFormData = z.infer<typeof regFormSchema>;
export type LoginFormData = z.infer<typeof loginFormSchema>;

export interface User {
  name: string,
  email: string,
  userImage: string,
  role: string,
  status: string
}