import { createBook } from '@/api/services/book.service'
import { EditBookType, bookSchema } from '@/validation/book.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { SheetClose } from '../ui/sheet'
import { Textarea } from '../ui/textarea'

const BookForm = () => {
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [backCoverImage, setBackCoverImage] = useState<File | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const form = useForm<EditBookType>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: '',
      description: '',
      authorName: '',
      coverImage: undefined,
    },
  })

  const addBookMutation = useMutation<void, AxiosError, FormData>({
    mutationFn: createBook,
    onSuccess: () => {
      form.reset()
      setMessage(t('add_book.form.success_message'))
      setTimeout(() => {
        setMessage(null)
      }, 3000)
      setCoverImage(null)
      setBackCoverImage(null)
      queryClient.invalidateQueries({
        queryKey: ['books'],
      })
    },
    onError: (e) => {
      console.log(e)
      setMessage(t('add_book.form.error_message'))
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    },
  })

  const onSubmit = (data: EditBookType) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('authorName', data.authorName)
    if (data.coverImage) {
      formData.append('coverImage', data.coverImage[0])
    }
    if (data.backCoverImage) {
      formData.append('backCoverImage', data.backCoverImage[0])
    }

    addBookMutation.mutate(formData)
  }

  const coverImageRef = form.register('coverImage')
  const backCoverImageRef = form.register('backCoverImage')

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('add_book.form.title_label')}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t('add_book.form.title_placeholder')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="coverImage"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300">
                    <Input
                      {...coverImageRef}
                      onChange={(e) => {
                        if (e.target.files) {
                          setCoverImage(e.target.files[0])
                        }
                        coverImageRef.onChange(e)
                      }}
                      type="file"
                      className="absolute inset-0 z-10 h-full w-full opacity-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {coverImage ? (
                        <img
                          className="h-24 w-24 rounded-lg object-cover"
                          src={URL.createObjectURL(coverImage)}
                          alt={t('add_book.form.cover_label')}
                        />
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

          <FormField
            control={form.control}
            name="backCoverImage"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300">
                    <Input
                      {...backCoverImageRef}
                      onChange={(e) => {
                        if (e.target.files) {
                          setBackCoverImage(e.target.files[0])
                        }
                        backCoverImageRef.onChange(e)
                      }}
                      type="file"
                      className="absolute inset-0 z-10 h-full w-full opacity-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {backCoverImage ? (
                        <img
                          className="h-24 w-24 rounded-lg object-cover"
                          src={URL.createObjectURL(backCoverImage)}
                          alt={t('add_book.form.back_cover_label')}
                        />
                      ) : (
                        <p className="text-center text-sm text-gray-500">
                          {t('add_book.form.back_cover_label')}
                        </p>
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('add_book.form.description_label')}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={t('add_book.form.description_placeholder')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="authorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('add_book.form.author_label')}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t('add_book.form.author_placeholder')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full flex-col gap-4">
          <p>{message ? <p>{message}</p> : null}</p>
          <Button type="submit">{t('add_book.form.submit_button')}</Button>
          <SheetClose asChild>
            <Button variant="outline">
              {t('add_book.form.cancel_button')}
            </Button>
          </SheetClose>
        </div>
      </form>
    </Form>
  )
}

export default BookForm
