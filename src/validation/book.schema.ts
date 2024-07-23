import { z } from 'zod'

export const bookSchema = z.object({
  title: z
    .string()
    .min(1, 'add_book.errors.title_required')
    .max(100, 'add_book.errors.title_max_length'),
  description: z.string().min(1, 'add_book.errors.description_required'),
  authorName: z.string().min(1, 'add_book.errors.author_name_required'),
})

export type EditBookType = z.infer<typeof bookSchema>
