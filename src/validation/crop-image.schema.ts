import { z } from 'zod'

export const ImageCropSchema = z.object({
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  zoom: z.number(),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      if (!file) return true
      return file.size < 4 * 1024 * 1024
    }, 'add_book.errors.cover_image_max_size'),
  imageUrl: z.string().optional(),
})

export type ImageCropType = z.infer<typeof ImageCropSchema>
