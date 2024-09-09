import tv from '@/utils/tv'

export const fieldTv = tv({
  slots: {
    containerSlot: [
      //
      'group',
      'grid gap-1',
    ],
    labelSlot: [
      //
      'py-0.5 w-fit',
      'flex items-center gap-1',
      'text-body-sm-bold',
      '[&_[data-slot=label-text]]:text-neutral-1',
      '[&_[data-slot=label-ast]]:text-semantic-red',
    ],
    fieldContainerSlot: [
      //
      'rounded bg-neutral-4',
      'ring-inset ring-1',
      'ring-neutral-2',
      'focus-within:ring-primary-1',
      'focus-within:shadow-focus-input',
      'flex',
      'group-has-[[data-invalid=true]]:ring-semantic-red',
      'focus-within:group-has-[[data-invalid=true]]:ring-semantic-red',
      'group-has-[[data-disabled=true]]:opacity-50',
      'group-has-[[data-disabled=true]]:cursor-not-allowed',
    ],
    inputContainerSlot: [
      //
      'grow',
      'flex items-center',
    ],
    inputSlot: [
      //
      'grow',
      'bg-neutral-4 bg-clip-padding',
      'rounded-l border-l border-y border-transparent',
      'pl-2.75 py-1.75',
      'caret-primary-1',
      'placeholder:!text-body-sm placeholder:text-neutral-1/50',
      'text-body-sm text-neutral-1',
      'disabled:cursor-not-allowed',
      'autofill:[-webkit-text-fill-color:theme(colors.neutral.1)]',
      'autofill:[-webkit-box-shadow:inset_0px_0px_0px_1000px_theme(colors.neutral.4)]',
    ],
    inputIconContainerSlot: [
      //
      'shrink-0',
      'pr-2',
      'flex items-center',
      '*:size-4 *:ml-2',
      '[&_[data-slot=warning-icon]]:text-semantic-red',
    ],
    inputXCircleIconSlot: [
      //
      'cursor-pointer',
      'text-neutral-3',
      'transition-colors hover:text-neutral-2',
      'focus:drop-shadow-focus-icon',
      'group-has-[[data-disabled=true]]:cursor-not-allowed',
      'group-has-[[data-disabled=true]]:hover:text-neutral-3',
    ],
    comboboxButtonSlot: [
      //
      'shrink-0',
      'w-7',
      'grid place-items-center',
      'relative before:absolute',
      'before:left-0 before:inset-y-px',
      'before:w-px before:bg-neutral-2',
      'disabled:cursor-not-allowed',
      '*:size-3 *:text-neutral-1',
      '*:transition-transform',
      '*:aria-expanded:rotate-180',
    ],
    descriptionSlot: [
      //
      'text-body-sm text-neutral-1',
    ],
    errorMessageSlot: [
      //
      'text-body-sm text-semantic-red',
    ],
    listBoxItemTv: [
      //
      'px-2.75 py-2',
      'text-body-sm text-neutral-1',
      'first:mt-0.75',
      'last:mb-0.75',
      'focus:bg-neutral-3',
      'selected:bg-neutral-3',
    ],
  },
})

export const {
  containerSlot,
  labelSlot,
  fieldContainerSlot,
  inputContainerSlot,
  inputSlot,
  inputIconContainerSlot,
  inputXCircleIconSlot,
  comboboxButtonSlot,
  descriptionSlot,
  errorMessageSlot,
  listBoxItemTv,
} = fieldTv()
