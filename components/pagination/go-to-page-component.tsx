'use client'

import { goToPageComponentContainerSlot } from '@/components/pagination/style'
import useFilterQueryString from '@/hooks/use-filter-query-string'
import { useTableContext } from '@/providers/table'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Input, NumberField } from 'react-aria-components'

type Props = {
  className?: string
}

export default function GoToPageComponent({ className }: Props) {
  const { page, totalPage } = useTableContext()
  const { filterQueryString } = useFilterQueryString()
  const [value, setValue] = useState(page)
  const [inputWidth, setInputWidth] = useState(36)

  useEffect(() => {
    setValue(page)
  }, [page])

  useEffect(() => {
    const spanEl = document.createElement('span')
    spanEl.textContent = value.toString()
    spanEl.className = clsx([
      // 
      'inline-block',
      'fixed bottom-0 right-0',
      'rounded bg-neutral-4',
      'ring-inset ring-1 ring-neutral-2',
      'px-3.5 py-2',
      'text-body-sm text-neutral-1',
    ])
    document.body.append(spanEl)
    setInputWidth(spanEl.getBoundingClientRect().width)
    spanEl.remove()
  }, [value])

  return (
    <div className={goToPageComponentContainerSlot({ className })}>
      <p>Go to page</p>
      <NumberField
        aria-labelledby='Go to page'
        minValue={1}
        maxValue={totalPage}
        onKeyDown={(e) => {
          console.log('🚀 ~ GoToPageComponent ~ onKeyDown:', e)
          if (e.code === 'Enter') {
            filterQueryString({
              page: value.toString(),
            })
          }
        }}
        onBlur={() => {
          console.log('onBlur: ', value)
          filterQueryString({
            page: value.toString(),
          })
        }}
        onInput={(e) => {
          const el = e.target as HTMLInputElement
          console.log('onInput: ', el.value)
          let newValue = parseInt(el.value.replace(/[^\d]/g, ''))

          if (Number.isNaN(newValue)) {
            newValue = 1
          }
          if (newValue > totalPage) {
            newValue = totalPage
          }
          if (newValue < 1) {
            newValue = 1
          }

          console.log('🚀 ~ newValue 2:', newValue)
          setValue(newValue)
        }}
        value={value}
        onChange={(newValue) => {
          if (Number.isNaN(newValue)) {
            newValue = 1
          }
          console.log('onChange: ', newValue)
          setValue(newValue)
        }}
        // formatOptions={{}}
      >
        <Input
          // inputMode='numeric'
          style={{ width: inputWidth }}
          className={clsx([
            //
            'rounded bg-neutral-4',
            'ring-inset ring-1',
            'ring-neutral-2 focus:ring-primary-1 focus:shadow-focus-input',
            'px-3.5 py-2',
            'caret-primary-1',
            'placeholder:!text-body-sm placeholder:text-neutral-1/50',
            'text-body-sm text-neutral-1',
            'min-w-9 max-w-17.5',
          ])}
        />
      </NumberField>
      <p>/ {totalPage}</p>
    </div>
  )
}
