import tv from '@/utils/tv'
import { VariantProps } from 'tailwind-variants'

export type PaginationVariants = VariantProps<typeof paginationStyles>

export const paginationStyles = tv({
  slots: {
    containerSlot: [
      //
      'flex flex-col-reverse gap-4',
      'md:flex-row md:items-center md:justify-end',
    ],
    goToPageComponentContainerSlot: [
      //
      'flex items-center gap-2',
      'text-body-sm text-neutral-1',
    ],
  },
})

export const { containerSlot, goToPageComponentContainerSlot } = paginationStyles()
