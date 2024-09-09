import clsx from 'clsx'

type Props = {
  name?: string
}

export default function Avatar({ name }: Props) {
  const firstLetter = name ? name[0]?.toUpperCase() : 'A'

  return (
    <span
      className={clsx([
        'size-6 rounded-full',
        'border border-neutral-2 bg-neutral-3',
        'text-body-sm text-neutral-1',
      ])}
    >
      {firstLetter}
    </span>
  )
}
