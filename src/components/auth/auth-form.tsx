import { login } from '@/api/services/auth.service'
import { SignInSchema, SignInType } from '@/validation/sign-in.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Icons } from '../icons'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

const AuthForm = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const queryClient = useQueryClient()

  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
  })

  const loginMutation = useMutation({
    mutationFn: login,
    onMutate: () => {
      setIsLoading(true)
    },
    onError: () => {
      setIsLoading(false)
    },
    onSuccess: () => {
      setIsLoading(false)
      queryClient.invalidateQueries({
        queryKey: ['current-user'],
      })
    },
  })

  const onSubmit = (values: SignInType) => {
    loginMutation.mutate(values)
  }

  return (
    <div className={'grid gap-6'}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('auth.form.username_label')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('auth.form.username_placeholder')}
                    {...field}
                    id="email"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('auth.form.password_label')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('auth.form.password_placeholder')}
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {t('auth.form.sign_in_button_text')}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t('auth.form.other_method_text')}
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{' '}
        {t('auth.form.providers.google')}
      </Button>
    </div>
  )
}

export default AuthForm
