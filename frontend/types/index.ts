import { z } from 'zod';

export const regFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string()
    .email()
    .regex(new RegExp(/^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/), "Please use a valid email"),
  password: z.string()
    .regex(new RegExp(/^(?=.*[a-z])(?=.*\d).{6,}$/), "Password must be minimum 6 digit contain 1 number"),
})

export type RegFormData = z.infer<typeof regFormSchema>