import { resizeImage } from '@/api/services/images.service'
import { BookModel } from '@/models/book'
import { EditBookType } from '@/validation/book.schema'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Crop } from 'lucide-react'
import { useState } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'
import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Icons } from '../icons'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../ui/dialog'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

type BookImageFormProps = {
  form: UseFormReturn<EditBookType>
  existingBook?: BookModel
  imageType: 'coverImage' | 'backCoverImage'
}

type Crop = {
  x: number
  y: number
}

const BookImageForm = (props: BookImageFormProps) => {
  const { form, existingBook, imageType } = props
  const [isCropping, setIsCropping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()

  const imageUrl =
    imageType === 'coverImage'
      ? existingBook?.coverImageUrl
      : existingBook?.backCoverImageUrl

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [image, setImage] = useState<File | undefined>(undefined)

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    if (isLoading) return
    setCroppedAreaPixels(croppedAreaPixels)
  }
  const coverImageRef = form.register(imageType)

  const handleOpenCrop = () => {
    setIsCropping(true)
  }

  const handleCrop = async () => {
    if (!croppedAreaPixels) return
    setIsLoading(true)
    const resizedImage: Buffer = await resizeImage({
      x: croppedAreaPixels.x,
      y: croppedAreaPixels.y,
      width: croppedAreaPixels.width,
      height: croppedAreaPixels.height,
      zoom,
      imageUrl,
      image,
    })
    const newImage = new File([resizedImage], imageType)
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(newImage)
    setImage(newImage)
    form.setValue(imageType, dataTransfer.files)
    setIsCropping(false)
    setIsLoading(false)
  }

  return (
    <>
      <FormField
        control={form.control}
        name="coverImage"
        render={() => (
          <FormItem>
            <FormControl>
              <div className="relative flex h-36 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300">
                <Input
                  {...coverImageRef}
                  onChange={(e) => {
                    coverImageRef.onChange(e)
                    if (e.target.files) {
                      setImage(e.target.files[0])
                    }
                  }}
                  type="file"
                  className="absolute inset-0 z-10 h-full w-full opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {imageUrl || image ? (
                    <>
                      <button
                        type="button"
                        onClick={handleOpenCrop}
                        className="absolute right-1 top-1 z-50 rounded-full bg-black/10 p-1"
                      >
                        <Crop size={20} />
                      </button>
                      <img
                        className="h-36 w-24 rounded-lg object-cover"
                        src={image ? URL.createObjectURL(image) : imageUrl}
                        alt={t('add_book.form.cover_label')}
                      />
                    </>
                  ) : (
                    <p className="text-center text-sm text-gray-500">
                      {t('add_book.form.cover_label')}
                    </p>
                  )}
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {isCropping && (
        <Dialog defaultOpen>
          <DialogContent
            className="sm:max-w-[425px]"
            aria-describedby="Resize image"
          >
            <DialogHeader>
              <DialogTitle>{t('add_book.form.crop_image')}</DialogTitle>
            </DialogHeader>
            <div className="relative h-72">
              <Cropper
                image={image ? URL.createObjectURL(image) : imageUrl}
                crop={crop}
                zoom={zoom}
                aspect={2 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <DialogFooter>
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setIsCropping(false)}
                >
                  {t('add_book.form.cancel_button')}
                </Button>
                <Button disabled={isLoading} onClick={handleCrop}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {t('add_book.form.crop_button')}
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default BookImageForm
