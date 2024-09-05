import { Assign } from '@/types/common'
import { ErrorMessage } from '@hookform/error-message'
import { Warning } from '@phosphor-icons/react/dist/ssr'
import Button from '@/components/Button/CustomButton'
import React, { useRef, useState } from 'react'
import { usePress } from 'react-aria'
import {
  ComboBox as RACComboBox,
  Input as RACInput,
  Label,
  ListBox,
  Popover,
  Text,
  ComboBoxProps as RACComboBoxProps,
  ComboBoxRenderProps,
  ListBoxItem,
  composeRenderProps,
} from 'react-aria-components'
import { FieldErrors } from 'react-hook-form'
import { VariantProps } from 'tailwind-variants'
import XCircleIcon from '@/public/icons/x-circle'
import { textFieldTv } from '../TextField/style'
import { CaretDown } from '@phosphor-icons/react'

type ComboBoxVariants = VariantProps<typeof textFieldTv>

export type ComboBoxProps<T extends object> = Assign<
  Assign<RACComboBoxProps<T>, ComboBoxVariants>,
  {
    labelText?: string
    labelClassName?: string
    inputContainerClassName?: string
    placeholder?: string
    inputClassName?: string
    inputIconContainerClassName?: string
    descriptionText?: string
    descriptionClassName?: string
    errorClassName?: string
    comboBoxClassName?: string
    caretDownContainerClassName?: string
    popoverClassName?: string
    errors?: FieldErrors
    items: T[]
    itemText: (item: T) => string
    itemCheckbox?: boolean
  }
>

const ComboBox = <T extends object & { id: string | number }>({
  labelText,
  labelClassName,
  inputContainerClassName,
  placeholder = 'Choose',
  inputClassName,
  inputIconContainerClassName,
  descriptionText,
  descriptionClassName,
  errorClassName,
  comboBoxClassName,
  caretDownContainerClassName,
  popoverClassName,
  errors,
  isRequired = true,
  items,
  itemText,
  itemCheckbox = false,
  ...props
}: ComboBoxProps<T>) => {
  const {
    root,
    label,
    inputContainer,
    input,
    listBoxItem,
    listBox,
    caretDownContainer,
    comboBoxIconContainer,
    popover,
    xCircleIcon,
    description,
    error,
  } = textFieldTv()

  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false);

  const { pressProps } = usePress({
    onPressEnd: () => inputRef.current?.focus(),
    onPress: () => {
      setValue('')
      props.onSelectionChange?.(null)
    },
  })

  return (
    <RACComboBox<T>
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        root({ ...renderProps, ...props, className }),
      )}
      inputValue={value}
      isRequired={isRequired}
      onInputChange={setValue}
      onOpenChange={setIsOpen}
    >
      {({ isRequired, isDisabled, isInvalid }: ComboBoxRenderProps) => (
        <>
          {labelText && (
            <Label className={label({ className: labelClassName })}>
              <span data-slot='label-text'>{labelText}</span>
              {isRequired && <span data-slot='label-ast'>&#42;</span>}
            </Label>
          )}
          <div
            className={inputContainer({
              isDisabled,
              isInvalid,
              className: inputContainerClassName,
            })}
          >
            <RACInput
              ref={inputRef}
              placeholder={placeholder}
              className={input({ className: inputClassName })}
            />
            <div className={comboBoxIconContainer()}>
              {value && (
                <XCircleIcon
                  {...pressProps}
                  role='button'
                  tabIndex={0}
                  className={xCircleIcon({ isDisabled })}
                />
              )}
              {isInvalid && (
                <Warning
                  weight='fill'
                  className='text-semantic-red'
                />
              )}
              <Button
                className={caretDownContainer({ className: caretDownContainerClassName })}
                aria-label='Open Combobox'
                iconOnly
                variant='ghost'
              >
                <CaretDown
                  weight='bold'
                  className={`text-neutral-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  style={{ width: '12px', height: '12px' }}
                />
              </Button>
            </div>
          </div>
          {descriptionText && (
            <Text
              slot='description'
              className={description({ className: descriptionClassName })}
            >
              {descriptionText}
            </Text>
          )}
          {props.name && (
            <ErrorMessage
              name={props.name}
              errors={errors}
              render={({ message }) => (
                <Text
                  slot='errorMessage'
                  className={error({ className: errorClassName })}
                >
                  {message}
                </Text>
              )}
            />
          )}
          <Popover
            className={popover({ className: popoverClassName })}
            placement='bottom start'
            style={{ width: 'var(--trigger-width)' }}
          >
            <ListBox className={listBox()}>
              {items.map((item) => (
                <ListBoxItem
                  key={item.id}
                  textValue={itemText(item)}
                  className={listBoxItem({
                    className: value === itemText(item) ? 'bg-neutral-3' : '',
                  })}
                >
                  <span>{itemText(item)}</span>
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
        </>
      )}
    </RACComboBox>
  )
}

export default ComboBox
