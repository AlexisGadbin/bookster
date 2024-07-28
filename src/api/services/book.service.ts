import { BookModel } from '@/models/book'
import { instance } from '../axios'

export const getBooks = async (): Promise<BookModel[]> => {
  return (await instance.get('/books')).data
}

export const getBookById = async (id: number): Promise<BookModel> => {
  return (await instance.get(`/books/${id}`)).data
}

export const createBook = async (formData: FormData): Promise<void> => {
  await instance.post('/books', formData)
}

export const deleteBook = async (id: number): Promise<void> => {
  await instance.delete(`/books/${id}`)
}
