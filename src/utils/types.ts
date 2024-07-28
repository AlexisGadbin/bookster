export type SelectOption = {
  label: string
  value: string
}

export type PaginatedResponse<T> = {
  data: T[]
  meta: any
}
