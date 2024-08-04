'use client'

import { deleteBook, getBookById } from '@/api/services/book.service'
import AddBookButton from '@/components/books/add-books-button'
import { Button } from '@/components/ui/button'
import { useAuthenticatedUser } from '@/utils/hooks/authenticated-user'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Edit2, Trash2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const BookDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { t } = useTranslation('book_details')
  const { user } = useAuthenticatedUser()

  const { data: book, isLoading } = useQuery({
    queryKey: ['book', id],
    queryFn: () => getBookById(Number(id)),
  })

  const deleteBookMutation = useMutation({
    mutationFn: () => deleteBook(Number(id)),
    onSuccess: () => {
      navigate('/')
      queryClient.invalidateQueries({ queryKey: ['books'] })
      toast.success(t('delete_success_toast'))
    },
    onError: () => {
      toast.error(t('delete_error_toast'))
    },
  })

  const handleDeleteBook = () => {
    deleteBookMutation.mutate()
  }

  if (isLoading) return <div>Loading...</div>

  if (!book) return <div>No book found</div>

  return (
    <section className="relative h-full">
      <div className="flex w-full items-center justify-center gap-8 py-8">
        <img
          src={book.coverImageUrl}
          alt={book.title}
          className="h-36 w-24 rounded-lg object-cover"
        />
        <img
          src={book.backCoverImageUrl}
          alt={book.title}
          className="h-36 w-24 rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col px-4">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <span className="text-sm">{book.author.name}</span>
        <p className="text-sm">{book.description}</p>
        {user?.id === book.contributor.id && (
          <div className="mt-4 flex justify-center gap-4">
            <Button
              variant={'ghost'}
              className="h-14 w-14 rounded-full border border-border md:h-16 md:w-16"
              onClick={handleDeleteBook}
            >
              <Trash2 />
            </Button>
            <Button
              variant={'ghost'}
              className="h-14 w-14 rounded-full border border-border md:h-16 md:w-16"
            >
              <AddBookButton existingBook={book}>
                <Edit2 />
              </AddBookButton>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BookDetails
