import Roles from '@/utils/enums/role'

export type UserModel = {
  id: number
  firstName: string
  lastName: string
  email: string
  role: Roles
}
