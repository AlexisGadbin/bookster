import { UserModel } from '@/models/user'
import { SignInType } from '@/validation/sign-in.schema'
import { SignUpType } from '@/validation/sign-up.schema'
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

export const register = async (signUpRequest: SignUpType): Promise<void> => {
  await instance.post('/auth/register', signUpRequest)
}
