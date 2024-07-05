import { getAuthors } from '@/api/services/author.service'
import { createBook } from '@/api/services/book.service'
import { EditBookType, bookSchema } from '@/validation/book.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { DrawerClose, DrawerFooter } from '../ui/drawer'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Textarea } from '../ui/textarea'

const BookForm = () => {
  const [message, setMessage] = useState<string | null>(null)
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const { data: authors } = useQuery({
    queryKey: ['authors'],
    queryFn: getAuthors,
  })

  const form = useForm<EditBookType>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: '',
      description: '',
      authorId: undefined,
    },
  })

  const addBookMutation = useMutation<void, AxiosError, EditBookType>({
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
    onError: () => {
      setMessage(t('add_book.form.error_message'))
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    },
  })

  const onSubmit = (data: EditBookType) => {
    addBookMutation.mutate(data)
  }

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
          name="authorId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('add_book.form.author_label')}</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t('add_book.form.author_placeholder')}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {authors?.map((author) => (
                    <SelectItem key={author.id} value={String(author.id)}>
                      {author.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <DrawerFooter>
          <p>{message ? <p>{message}</p> : null}</p>
          <Button type="submit">{t('add_book.form.submit_button')}</Button>
          <DrawerClose asChild>
            <Button variant="outline">
              {t('add_book.form.cancel_button')}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </form>
    </Form>
  )
}

export default BookForm
