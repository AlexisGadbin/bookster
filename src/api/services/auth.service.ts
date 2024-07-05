import { UserModel } from '@/models/user'
import { SignInType } from '@/validation/sign-in.schema'
import { instance } from '../axios'

export const getAuthenticatedUser = async (): Promise<
  UserModel | undefined
> => {
  return (await instance.get('/auth/current-user')).data
}

export const login = async (signInRequest: SignInType): Promise<void> => {
  await instance.post('/auth/login', signInRequest)
}

export const logout = async (): Promise<void> => {
  await instance.delete('/auth/logout')
}
