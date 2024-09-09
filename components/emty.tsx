import { Assign } from '@/types/common'
import tv from '@/utils/tv'
import { FileX } from '@phosphor-icons/react/dist/ssr'
import { ComponentPropsWithoutRef } from 'react'

const emptyComponentTv = tv({
  slots: {
    containerSlot: [
      //
      'p-[--px]',
      'flex flex-col justify-center items-center gap-2',
      'text-body-sm text-neutral-1',
    ],
    iconSlot: [
      //
      'size-6',
    ],
    textSlot: [
      //
      '',
    ],
  },
})

const { containerSlot, iconSlot, textSlot } = emptyComponentTv()

type Props = Assign<
  ComponentPropsWithoutRef<'div'>,
  {
    iconClassName?: string
    textClassName?: string
  }
>

export default function EmptyComponent({
  className,
  iconClassName,
  textClassName,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={containerSlot({ className })}
    >
      <FileX className={iconSlot({ className: iconClassName })} />
      <span className={textSlot({ className: textClassName })}>No results found.</span>
    </div>
  )
}
