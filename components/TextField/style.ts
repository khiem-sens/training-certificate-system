import tv from '@/utils/tv'
import { list } from 'postcss'
import { ListBoxItem } from 'react-aria-components'
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
      'py-2',
      'ring-inset ring-1',
      'ring-neutral-2',
      'focus-within:shadow-focus-input',
      'focus-within:ring-inset focus-within:ring-1 focus-within:ring-primary-1',
      'flex items-center',
    ],
    input: [
      'px-3',
      'bg-transparent',
      'caret-primary-1',
      'placeholder:!text-body-sm placeholder:text-neutral-1/50',
      'text-body-sm text-neutral-1',
      'grow',
      'autofill:!bg-transparent autofill:!text-neutral-1',
      'w-full'
    ],

    inputIconContainer: [
      'shrink-0',
      '*:size-4',
      'flex items-center *:ml-2',
    ],

    comboBoxIconContainer: [
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
    
    checkbox: [
      'relative',
      'border-none',
      'cursor-pointer',
      'w-5 h-5 p-3',
      'rounded gap-5',
      'ring-inset ring-1 ring-neutral-2',
    ],

    listBox:[
      
    ],

    listBoxItem: [
      'px-3',
      'text-body-sm text-neutral-1',
      'flex items-center gap-2 py-2',
      'hover:bg-neutral-3',
      'first:hover:rounded-t-md',
      'last:hover:rounded-b-md',
    ],

    listBoxItemCheckbox: [
      'text-neutral-4 absolute inset-0 translate-x-1/2 translate-y-1/2'
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