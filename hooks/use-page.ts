import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function usePage() {
  const searchParams = useSearchParams()

  const getPageFromSearchParams = useCallback(() => {
    const newPage = parseInt(searchParams.get('page') || '')
    if (isNaN(newPage)) return 1
    return newPage
  }, [searchParams])

  const [page, setPage] = useState(getPageFromSearchParams())

  useEffect(() => {
    setPage(getPageFromSearchParams())
  }, [getPageFromSearchParams])

  return page
}
