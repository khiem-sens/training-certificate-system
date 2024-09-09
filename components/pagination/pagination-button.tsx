'use client'

import { useTableContext } from '@/providers/table'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { Collection } from 'react-aria-components'
import Button from '../ui/button/button'
import useWindowSize from '@/hooks/use-window-size'
import useFilterQueryString from '@/hooks/use-filter-query-string'
import BREAKPOINTS from '@/constant/breakpoints'

export default function PaginationButton() {
  const { width } = useWindowSize()
  const { page, totalPage } = useTableContext()
  const { filterQueryString } = useFilterQueryString()

  const items = (() => {
    const TOTAL_BUTTON = width >= BREAKPOINTS.md ? 10 : 5
    const totalButton = totalPage >= TOTAL_BUTTON ? TOTAL_BUTTON : totalPage
    const middlePosition = Math.round(TOTAL_BUTTON / 2)
    let factor = 0

    if (totalPage > totalButton) {
      if (page > middlePosition) {
        if (totalPage - page < middlePosition) {
          factor = totalPage - TOTAL_BUTTON
        } else {
          factor = page - middlePosition
        }
      }
    }

    return Array(totalButton)
      .fill(0)
      .map((_, i) => {
        const page = i + 1 + factor
        return {
          id: `Go to page ${page}`,
          name: page,
        }
      })
  })()

  if (width === 0) return null

  return (
    <div
      className={clsx([
        //
        'flex items-center gap-4',
      ])}
    >
      <Button
        variant='ghost'
        iconOnly
        isDisabled={page === 1}
        onPress={() => {
          filterQueryString({
            page: (page - 1 < 1 ? 1 : page - 1).toString(),
          })
        }}
      >
        <CaretLeft />
      </Button>

      <div
        className={clsx([
          //
          'flex items-center gap-[5.33px]',
        ])}
      >
        <Collection items={items}>
          {(item) => (
            <Button
              aria-labelledby={item.id}
              variant='ghost'
              data-selected={item.name === page}
              className={clsx([
                //
                'min-w-6',
                '[&[data-selected=true]_[data-slot=border]]:visible',
              ])}
              onPress={() => {
                filterQueryString({
                  page: item.name.toString(),
                })
              }}
            >
              <span>{item.name}</span>
            </Button>
          )}
        </Collection>
      </div>

      <Button
        variant='ghost'
        iconOnly
        isDisabled={totalPage === page}
        onPress={() => {
          filterQueryString({
            page: (page + 1 > totalPage ? totalPage : page + 1).toString(),
          })
        }}
      >
        <CaretRight />
      </Button>
    </div>
  )
}
