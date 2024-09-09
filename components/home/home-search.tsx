'use client'

import useFilterQueryString from '@/hooks/use-filter-query-string'
import useSearch from '@/hooks/use-search'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { usePress } from 'react-aria'
import TextField from '../ui/field/text-field'

export default function HomeSearch() {
  const ref = useRef<HTMLInputElement>(null)
  const search = useSearch()
  const [value, setValue] = useState(search)
  const { filterQueryString } = useFilterQueryString()
  const { pressProps } = usePress({
    onPress: () => {
      filterQueryString({
        search: value === '' ? undefined : value,
        page: undefined,
      })
    },
    onPressEnd: () => ref.current?.focus(),
  })

  useEffect(() => {
    setValue(search)
  }, [search])

  return (
    <TextField
      ref={ref}
      autoFocus
      aria-labelledby='Search'
      placeholder='Search'
      value={value}
      onChange={setValue}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          filterQueryString({
            search: value === '' ? undefined : value,
            page: undefined,
          })
        }
      }}
      inputMode='search'
      className='w-full max-w-80 md:w-80'
      inputIconSlot={
        <MagnifyingGlass
          {...pressProps}
          role='button'
          tabIndex={0}
          className={clsx([
            //
            'cursor-pointer',
            'text-neutral-1',
            'transition-colors hover:text-neutral-2',
            'focus:drop-shadow-focus-icon',
          ])}
        />
      }
    />
  )
}
