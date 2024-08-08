import { BookModel } from '@/models/book'
import { PaginatedResponse } from '@/utils/types'
import { instance } from '../axios'

export const getBooks = async (): Promise<PaginatedResponse<BookModel>> => {
  return (await instance.get('/books')).data
}

export const getWishlistedBooks = async (): Promise<
  PaginatedResponse<BookModel>
> => {
  return (await instance.get('/wishlist')).data
}

export const getBookById = async (id: number): Promise<BookModel> => {
  return (await instance.get(`/books/${id}`)).data
}

export const createBook = async (formData: FormData): Promise<void> => {
  await instance.post('/books', formData)
}

export const updateBook = async (
  id: number,
  formData: FormData
): Promise<void> => {
  await instance.put(`/books/${id}`, formData)
}

export const deleteBook = async (id: number): Promise<void> => {
  await instance.delete(`/books/${id}`)
}
