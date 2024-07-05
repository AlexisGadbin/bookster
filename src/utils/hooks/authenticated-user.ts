import { getAuthenticatedUser } from '@/api/services/auth.service'
import { UserModel } from '@/models/user'
import { useQuery } from '@tanstack/react-query'

export const useAuthenticatedUser = (): UserModel | undefined => {
  const { data } = useQuery({
    queryKey: ['current-user'],
    queryFn: getAuthenticatedUser,
  })

  return data
}
