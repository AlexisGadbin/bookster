import { z } from 'zod'

export const userSchema = z.object({
  firstName: z.string().min(1).max(255),
  lastName: z.string().min(1).max(255),
  email: z.string().email().max(255),
  avatarUrl: z.string().max(255).optional(),
  avatarBackgroundColor: z.string().max(255),
})

export type EditUser = z.infer<typeof userSchema>
