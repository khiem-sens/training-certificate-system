'use client'

import XCircleIcon from '@/public/icons/x-circle'
import { Assign } from '@/types/common'
import {
  containerSlot,
  descriptionSlot,
  errorMessageSlot,
  fieldContainerSlot,
  inputContainerSlot,
  inputIconContainerSlot,
  inputSlot,
  inputXCircleIconSlot,
  labelSlot,
} from './style'
import { ErrorMessage } from '@hookform/error-message'
import { Warning } from '@phosphor-icons/react/dist/ssr'
import { forwardRef, ReactNode, useImperativeHandle, useRef, useState } from 'react'
import { usePress } from 'react-aria'
import {
  composeRenderProps,
  Label,
  Input as RACInput,
  TextField as RACTextField,
  TextFieldProps as RACTextFieldProps,
  Text,
} from 'react-aria-components'

export type TextFieldProps = Assign<
  Omit<RACTextFieldProps, 'value' | 'onChange'>,
  {
    labelText?: string
    labelClassName?: string
    fieldContainerClassName?: string
    inputContainerClassName?: string
    placeholder?: string
    value: string
    onChange: (value: string) => void
    inputClassName?: string
    inputIconContainerClassName?: string
    inputIconSlot?: ReactNode
    descriptionText?: string
    descriptionClassName?: string
    errorMessageClassName?: string
  }
>

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      labelText,
      labelClassName,
      fieldContainerClassName,
      inputContainerClassName,
      placeholder = 'Type here',
      value = '',
      onChange,
      inputClassName,
      inputIconContainerClassName,
      inputIconSlot,
      descriptionText,
      descriptionClassName,
      errorMessageClassName,
      inputMode = 'text',
      validationBehavior = 'aria',
      isRequired = true,
      isInvalid = false,
      ...props
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [])

    const inputRef = useRef<HTMLInputElement>(null)
    const { pressProps } = usePress({
      onPress: () => onChange(''),
      onPressEnd: () => inputRef.current?.focus(),
    })

    return (
      <RACTextField
        {...props}
        inputMode={inputMode}
        validationBehavior={validationBehavior}
        isRequired={isRequired}
        isInvalid={isInvalid}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          console.log('onFocus TextField')
          props.onFocus?.(e)
          const el = e.target as HTMLInputElement | HTMLTextAreaElement
          el.select()
          el.setSelectionRange(el.selectionEnd, el.selectionEnd)
        }}
        className={composeRenderProps(props.className, (className, renderProps) =>
          containerSlot({ ...renderProps, className }),
        )}
      >
        {labelText && (
          <Label className={labelSlot({ className: labelClassName })}>
            <span data-slot='label-text'>{labelText}</span>
            {isRequired && <span data-slot='label-ast'>&#42;</span>}
          </Label>
        )}

        <div className={fieldContainerSlot({ className: fieldContainerClassName })}>
          <div className={inputContainerSlot({ className: inputContainerClassName })}>
            <RACInput
              ref={inputRef}
              placeholder={placeholder}
              className={composeRenderProps(inputClassName, (className, renderProps) =>
                inputSlot({ ...renderProps, className }),
              )}
            />
            <div className={inputIconContainerSlot({ className: inputIconContainerClassName })}>
              {value && (
                <XCircleIcon
                  {...pressProps}
                  role='button'
                  tabIndex={0}
                  className={inputXCircleIconSlot()}
                />
              )}

              {inputIconSlot}

              {isInvalid && (
                <Warning
                  data-slot='warning-icon'
                  weight='fill'
                />
              )}
            </div>
          </div>
        </div>

        {descriptionText && (
          <Text
            slot='description'
            className={descriptionSlot({ className: descriptionClassName })}
          >
            {descriptionText}
          </Text>
        )}

        {props.name && (
          <ErrorMessage
            name={props.name}
            render={({ message }) => (
              <Text
                slot='errorMessage'
                className={errorMessageSlot({ className: errorMessageClassName })}
              >
                {message}
              </Text>
            )}
          />
        )}
      </RACTextField>
    )
  },
)

export default TextField
