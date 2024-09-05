'use client'

import { Assign } from '@/types/common'
import { ErrorMessage } from '@hookform/error-message'
import { Warning } from '@phosphor-icons/react/dist/ssr'
import { ChangeEvent, forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { usePress } from 'react-aria'
import {
  composeRenderProps,
  Input as RACInput,
  Label,
  TextField as RACTextField,
  TextFieldProps as RACTextFieldProps,
  Text,
} from 'react-aria-components'
import { FieldErrors } from 'react-hook-form'
import { VariantProps } from 'tailwind-variants'
import { textFieldTv } from './style'
import XCircleIcon from '@/public/icons/x-circle'
type TextFieldVariants = VariantProps<typeof textFieldTv>

export type InputProps = Assign<
  Assign<RACTextFieldProps, TextFieldVariants>,
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
    errors?: FieldErrors
  }
>

const Input = ({
  labelText,
  labelClassName,
  inputContainerClassName,
  placeholder = 'Type here',
  inputClassName,
  inputIconContainerClassName,
  descriptionText,
  descriptionClassName,
  errorClassName,
  errors,
  inputMode = 'text',
  isRequired = true,
  ...props
}: InputProps) => {
  const {
    root,
    label,
    inputContainer,
    input,
    inputIconContainer,
    xCircleIcon,
    description,
    error,
  } = textFieldTv()

  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(props.value)
  const { pressProps, isPressed } = usePress({
    onPressEnd: (e) => inputRef.current?.focus(),
    onPress: (e) => {
      setValue('')
      props.onChange?.('')
    },
  })

  return (
    <RACTextField
      {...props}
      inputMode={inputMode}
      isRequired={isRequired}
      className={composeRenderProps(props.className, (className, renderProps) =>
        root({ ...renderProps, ...props, className }),
      )}
    >
      {composeRenderProps(props.children, (children, { isRequired, isDisabled, isInvalid }) => {
        return (
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
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  props.onChange?.(e.target.value)
                }}
                onFocus={(e) => {
                  const el = e.target
                  el.select()
                  el.setSelectionRange(el.selectionEnd, el.selectionEnd)
                }}
                className={composeRenderProps(inputClassName, (className, renderProps) =>
                  input({ ...renderProps, className }),
                )}
              />
              <div className={inputIconContainer({ className: inputIconContainerClassName })}>
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
          </>
        )
      })}
    </RACTextField>
  )
}

export default Input
