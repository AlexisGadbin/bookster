import { AuthorModel } from './author'
import { UserModel } from './user'

export type BookModel = {
  id: number
  title: string
  description: string
  author: AuthorModel
  contributor: UserModel
}
