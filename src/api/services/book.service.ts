import { BookModel } from '@/models/book'
import { PaginatedResponse } from '@/utils/types'
import { instance } from '../axios'

export const getBooks = async (): Promise<PaginatedResponse<BookModel>> => {
  return (await instance.get('/books')).data
}

export const searchBooks = async (
  search: string
): Promise<PaginatedResponse<BookModel>> => {
  return (await instance.get(`/books?search=${search}`)).data
}

export const getWishlistedBooks = async (
  page?: number,
  limit?: number
): Promise<PaginatedResponse<BookModel>> => {
  return (await instance.get('/wishlist?page=' + page + '&limit=' + limit)).data
}

export const getMyBooks = async (
  page?: number,
  limit?: number
): Promise<PaginatedResponse<BookModel>> => {
  return (await instance.get('me/books?page=' + page + '&limit=' + limit)).data
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
