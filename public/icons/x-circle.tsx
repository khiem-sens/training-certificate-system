import { ComponentPropsWithoutRef } from 'react'

export default function XCircleIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
      {...props}
    >
      <path
        fill='currentColor'
        d='M0 8a8 8 0 1116 0A8 8 0 010 8z'
      ></path>
      <path
        fill='#333'
        d='M11.144 10.48a.47.47 0 01-.664.665L8 8.665l-2.48 2.48a.47.47 0 11-.665-.665L7.336 8l-2.48-2.48a.47.47 0 11.664-.665L8 7.336l2.481-2.481a.47.47 0 11.664.664L8.665 8l2.48 2.48z'
      ></path>
    </svg>
  )
}
