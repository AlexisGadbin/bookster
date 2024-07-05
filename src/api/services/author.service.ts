import { AuthorModel } from '@/models/author'
import { instance } from '../axios'

export const getAuthors = async (): Promise<AuthorModel[]> => {
  return (await instance.get('/authors')).data
}
