import GoToPageComponent from '@/components/pagination/go-to-page-component'
import PaginationButton from '@/components/pagination/pagination-button'
import { containerSlot } from '@/components/pagination/style'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>

export default function Pagination({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={containerSlot({ className })}
    >
      <PaginationButton />
      <GoToPageComponent className='shrink-0' />
    </div>
  )
}
