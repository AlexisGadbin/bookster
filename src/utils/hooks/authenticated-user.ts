import { getAuthenticatedUser } from '@/api/services/auth.service'
import { UserModel } from '@/models/user'
import { useQuery } from '@tanstack/react-query'

type UseAuthenticatedUser = {
  user: UserModel | undefined
  isLoading: boolean
}

export const useAuthenticatedUser = (): UseAuthenticatedUser => {
  const { data, isLoading } = useQuery({
    queryKey: ['current-user'],
    queryFn: getAuthenticatedUser,
    retry: false,
  })

  return {
    user: data,
    isLoading,
  }
}
