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
  FormDescription,
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

    addBookMutation.mutate(formData)
  }

  const fileRef = form.register('coverImage')

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
              <FormDescription>
                {t('add_book.form.title_description')}
              </FormDescription>
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
                <FormLabel>{t('add_book.form.cover_label')}</FormLabel>
                <FormControl>
                  <Input
                    {...fileRef}
                    onChange={(e) => {
                      if (e.target.files) {
                        setCoverImage(e.target.files[0])
                      }
                      fileRef.onChange(e)
                    }}
                    type="file"
                    placeholder={t('add_book.form.cover_placeholder')}
                    className="h-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {coverImage ? (
            <img
              className="h-24 w-24 rounded-lg object-cover"
              src={URL.createObjectURL(coverImage)}
              alt={t('add_book.form.cover_image')}
            />
          ) : null}
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
