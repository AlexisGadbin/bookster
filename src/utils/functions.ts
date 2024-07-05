import { UserModel } from '@/models/user'

export const getUserInitials = (user: UserModel): string => {
  return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`
}
