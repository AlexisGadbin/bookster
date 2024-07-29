import { z } from 'zod'

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string().min(6),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
})

export type SignUpType = z.infer<typeof SignUpSchema>
