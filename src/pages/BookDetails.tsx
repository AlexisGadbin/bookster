'use client'

import { deleteBook, getBookById } from '@/api/services/book.service'
import { Button } from '@/components/ui/button'
import { useAuthenticatedUser } from '@/utils/hooks/authenticated-user'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'
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
      <div className="h-2/3 w-full bg-primary">
        <img
          src={book.coverImageUrl}
          alt={book.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 h-2/5 w-full rounded-tl-3xl rounded-tr-3xl bg-background p-4">
        <div className="flex items-center justify-between">
          <h1>{book.title}</h1>
          {user?.id === book.contributor.id && (
            <div>
              <Button
                variant={'ghost'}
                className="h-14 w-14 rounded-full border border-border md:h-16 md:w-16"
                onClick={handleDeleteBook}
              >
                <Trash2 />
              </Button>
            </div>
          )}
        </div>
        <div>
          <p>{book.description}</p>
        </div>
      </div>
    </section>
  )
}

export default BookDetails
