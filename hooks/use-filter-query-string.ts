import { Route } from 'next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

type QueryObject = Record<string, string | undefined>
type QueryOptions = {
  type: 'push' | 'replace'
  scroll?: boolean
}

export default function useFilterQueryString() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (queryObject: QueryObject) => {
      const params = new URLSearchParams(searchParams.toString())

      Object.entries(queryObject).forEach(([key, value]) => {
        if (value === undefined) {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      })

      return params.toString()
    },
    [searchParams],
  )

  const filterQueryString = useCallback(
    (
      queryObject: QueryObject,
      queryOptions: QueryOptions = {
        type: 'push',
        scroll: false,
      },
    ) => {
      const { type, scroll } = queryOptions
      const url = `${pathname}?${createQueryString(queryObject)}`
      console.log('🚀 ~ filterQueryString ~ url:', url)

      router[type](url as Route, { scroll })
    },
    [pathname, createQueryString, router],
  )

  return {
    pathname,
    searchParams,
    filterQueryString,
  }
}
