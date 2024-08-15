import { z } from 'zod'

export const SearchSchema = z.object({
  search: z.string(),
})

export type SearchType = z.infer<typeof SearchSchema>
