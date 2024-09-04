import tv from '@/utils/tv'
import { VariantProps } from 'tailwind-variants'

export type ButtonVariants = VariantProps<typeof buttonTv>

export const buttonTv = tv({
  base: [
    'outline-0 transition-colors',
    'relative',
    'text-body-sm',
    'inline-flex items-center gap-1',
    '[&_:not([data-slot=border])]:grow [&_svg]:shrink-0 [&_svg]:size-5',
  ],
  variants: {
    variant: {
      primary: [
        'text-neutral-4',
        'bg-primary-1',
      ],
      secondary: [
        'text-neutral-1',
        'ring-inset ring-1 ring-neutral-2',
      ],
      ghost: [
        'text-primary-1',
      ],
      danger: [
        'text-neutral-4',
        'bg-semantic-red',
      ],
      'danger-ghost': [
        'text-semantic-red',
      ],
    },
    size: {
      md: '',
      sm: '',
    },
    iconOnly: {
      false: '',
      true: '',
    },
    isPending: {
      false: '',
      true: '[&>*:not([data-slot=loading-icon])]:invisible',
    },
    isHovered: {
      false: '',
      true: '',
    },
    isPressed: {
      false: '',
      true: '',
    },
    isFocused: {
      false: '',
      true: '',
    },
    isDisabled: {
      false: '',
      true: 'cursor-not-allowed opacity-50',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    iconOnly: false,
    isPending: false,
  },

  compoundVariants: [
    {
      variant: ['primary', 'secondary', 'danger'],
      size: 'md',
      iconOnly: false,
      className: 'px-4 py-2',
    },
    {
      variant: ['primary', 'secondary', 'danger'],
      size: 'md',
      iconOnly: true,
      className: 'p-2',
    },
    {
      variant: ['primary', 'secondary', 'danger'],
      size: 'sm',
      iconOnly: false,
      className: 'px-2 py-1',
    },
    {
      variant: ['primary', 'secondary', 'danger'],
      size: 'sm',
      iconOnly: true,
      className: 'p-1',
    },
    {
      variant: ['ghost', 'danger-ghost'],
      size: 'md',
      iconOnly: false,
      className: 'px-1 py-0.5',
    },
    {
      variant: ['ghost', 'danger-ghost'],
      size: 'md',
      iconOnly: true,
      className: 'p-0.5',
    },
    {
      variant: ['primary', 'secondary', 'danger'],
      className: 'shadow-button rounded',
    },
    {
      variant: ['primary', 'secondary', 'danger'],
      isFocused: true,
      className: 'shadow-focus-button',
    },
    {
      variant: 'primary',
      isHovered: true,
      className: 'bg-primary-2',
    },
    {
      variant: 'secondary',
      isHovered: true,
      className: 'text-primary-2',
    },
    {
      variant: 'danger',
      isHovered: true,
      className: 'bg-semantic-red-2',
    },
    {
      variant: 'ghost',
      isHovered: true,
      className: 'text-primary-2',
    },
    {
      variant: 'danger-ghost',
      isHovered: true,
      className: 'text-semantic-red-2',
    },
  ],
})
