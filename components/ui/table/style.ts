import tv from '@/utils/tv'
import { VariantProps } from 'tailwind-variants'

export type TableVariants = VariantProps<typeof tableStyles>

export const tableStyles = tv({
  slots: {
    tableLayoutSlot: [
      //
      '',
    ],
    tableSlot: [
      //
      'table-fixed',
      'border-separate border-spacing-0',
      // 'w-fit',
      'w-full',
      'bg-neutral-4',
    ],
    columnSlot: [
      //
      'text-left box-content',
      'sticky top-0 z-column',
      'bg-neutral-3 border-y border-neutral-2',
      'px-3 py-2.75',
      'first:pl-[--px] last:pr-[--px]',
      'truncate',
      'text-body-sm-bold text-neutral-1',
      'w-50',
    ],
    tableBodySlot: [
      //
      '[&[data-empty=true]_td]:p-0',
    ],
    rowSlot: [
      //
      'hover:bg-neutral-5',
    ],
    cellSlot: [
      //
      'px-3 pt-5 pb-4.75',
      'border-b border-neutral-2',
      'first:pl-[--px] last:pr-[--px]',
      'truncate',
      'text-body-sm text-neutral-1',
    ],
  },
})

export const { tableLayoutSlot, tableSlot, columnSlot, tableBodySlot, rowSlot, cellSlot } =
  tableStyles()
