import { EditUser } from '@/validation/user.schema'
import { instance } from '../axios'

export const updateUser = async (
  userId: number,
  user: EditUser
): Promise<void> => {
  return await instance.put(`/users/${userId}`, user)
}
