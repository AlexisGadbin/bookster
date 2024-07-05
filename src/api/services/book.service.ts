import { BookModel } from '@/models/book'
import { EditBookType } from '@/validation/book.schema'
import { instance } from '../axios'

export const getBooks = async (): Promise<BookModel[]> => {
  return (await instance.get('/books')).data
}

export const getBookById = async (id: number): Promise<BookModel> => {
  return (await instance.get(`/books/${id}`)).data
}

export const createBook = async (book: EditBookType): Promise<void> => {
  await instance.post('/books', book)
}

export const deleteBook = async (id: number): Promise<void> => {
  await instance.delete(`/books/${id}`)
}
