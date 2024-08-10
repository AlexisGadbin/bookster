import { z } from 'zod'

export const bookSchema = z.object({
  title: z
    .string()
    .min(1, 'add_book.errors.title_required')
    .max(100, 'add_book.errors.title_max_length'),
  coverImage: z
    .instanceof(FileList)
    .optional()
    .refine((file) => {
      if (!file || file.length === 0) return true
      return file[0].size < 4 * 1024 * 1024
    }, 'add_book.errors.cover_image_max_size'),
  backCoverImage: z
    .instanceof(FileList)
    .optional()
    .refine((file) => {
      if (!file || file.length === 0) return true
      return file[0].size < 4 * 1024 * 1024
    }, 'add_book.errors.cover_image_max_size'),
  description: z.string().min(1, 'add_book.errors.description_required'),
  authorName: z.string().min(1, 'add_book.errors.author_name_required'),
  isWishlisted: z.boolean(),
  note: z.number().min(0).max(10),
})

export type EditBookType = z.infer<typeof bookSchema>
