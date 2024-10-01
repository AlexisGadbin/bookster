import { ImageCropType } from '@/validation/crop-image.schema'
import { instance } from '../axios'

export const resizeImage = async (
  imageCrop: ImageCropType
): Promise<Buffer> => {
  const formData = new FormData()
  formData.append('x', String(imageCrop.x))
  formData.append('y', String(imageCrop.y))
  formData.append('width', String(imageCrop.width))
  formData.append('height', String(imageCrop.height))
  formData.append('zoom', String(imageCrop.zoom))
  if (imageCrop.imageUrl) formData.append('imageUrl', imageCrop.imageUrl)
  if (imageCrop.image) formData.append('image', imageCrop.image)
  return (
    await instance.post('/images/resize', formData, {
      responseType: 'blob',
    })
  ).data
}
