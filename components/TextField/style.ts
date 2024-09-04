import tv from '@/utils/tv'
import { VariantProps } from 'tailwind-variants'

export type ButtonVariants = VariantProps<typeof textFieldTv>

export const textFieldTv = tv({
  slots: {
    root: [
      'grid gap-1',
    ],
    label: [
      'py-0.5 w-fit',
      'flex items-center gap-1',
      'text-body-sm-bold',
      '[&_[data-slot=label-text]]:text-neutral-1',
      '[&_[data-slot=label-ast]]:text-semantic-red',
    ],
    inputContainer: [
      'rounded bg-neutral-4 relative',
      'px-3 py-2',
      'ring-inset ring-1',
      'ring-neutral-2',
      'focus-within:shadow-focus-input',
      'focus-within:ring-inset focus-within:ring-1 focus-within:ring-primary-1',
      'flex items-center',
    ],
    input: [
      'caret-primary-1',
      'placeholder:!text-body-sm placeholder:text-neutral-1/50',
      'text-body-sm text-neutral-1',
      'grow pr-12', 
      'autofill:!bg-transparent autofill:!text-neutral-1',
    ],
    inputIconContainer: [
      'absolute right-0 top-0 bottom-0 flex items-center gap-2', 
    ],
    xCircleIcon: [
      'cursor-pointer',
      'text-neutral-3',
      'transition-colors hover:text-neutral-2',
      'focus:drop-shadow-focus-icon',
    ],
    caretDownContainer: [
      'h-full border-l flex w-[1.75rem] justify-center', 
    ],
    popover: [
      'absolute left-0 z-10 bg-neutral-4 border border-neutral-2 rounded-md shadow-lg mt-[0.125rem]',
    ],
    description: [
      'text-body-sm text-neutral-1',
    ],
    error: [
      'text-body-sm text-semantic-red',
    ],
  },
  variants: {
    isRequired: {
      false: '',
      true: '',
    },
    isDisabled: {
      false: '',
      true: '',
    },
    isInvalid: {
      false: '',
      true: '',
    },

  },
  defaultVariants: {
    isRequired: true,
    isDisabled: false,
    isInvalid: false,
  },
  compoundSlots: [
    {
      slots: ['inputContainer', 'input', 'xCircleIcon'],
      isDisabled: true,
      className: 'cursor-not-allowed',
    },
    {
      slots: ['inputContainer'],
      isDisabled: true,
      className: 'opacity-50',
    },
    {
      slots: ['input'],
      isDisabled: true,
      className: 'bg-transparent',
    },
    {
      slots: ['xCircleIcon'],
      isDisabled: true,
      className: 'hover:text-neutral-3',
    },
    {
      slots: ['inputContainer'],
      isInvalid: true,
      className: [
        'ring-semantic-red',
        'focus-within:ring-semantic-red',
      ],
    },
  ],
})