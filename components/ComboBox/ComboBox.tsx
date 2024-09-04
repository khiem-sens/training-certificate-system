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
    children: React.ReactNode | ((item: T) => React.ReactNode)
  }
>

const ComboBox = <T extends object & { id: string | number }>({
  labelText,
  labelClassName,
  inputContainerClassName,
  placeholder = 'Select an option',
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
  children,
  ...props
}: ComboBoxProps<T>) => {
  const { root, label, inputContainer, input, inputIconContainer, caretDownContainer, popover, xCircleIcon, description, error } = textFieldTv()

  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')

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
            <div className={inputIconContainer()}>
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
              <div className={caretDownContainer({className: caretDownContainerClassName})}>
                <Button
                  className=''
                  aria-label='Open Combobox'
                  iconOnly
                  variant='ghost'
                >
                  <CaretDown weight="bold" className='text-neutral-1' style={{ width: '12px', height: '12px' }}/>
                </Button>
              </div>
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
            style={{ width: inputRef.current?.offsetWidth || '100%' }}
          >
            <ListBox className='p-1'>{children}</ListBox>
          </Popover>
        </>
      )}
    </RACComboBox>
  )
}

export default ComboBox
