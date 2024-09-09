'use client'

import { Assign } from '@/types/common'
import {
  comboboxButtonSlot,
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
import { CaretDown, Warning } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { usePress } from 'react-aria'
import {
  Button,
  composeRenderProps,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
  Text,
} from 'react-aria-components'

export type ComboboxOption = {
  id: any
  name: string
}

export type ComboboxProps<T extends object> = Assign<
  Omit<RACComboBoxProps<T>, 'children'>,
  {
    labelText?: string
    labelClassName?: string
    fieldContainerClassName?: string
    inputContainerClassName?: string
    placeholder?: string
    inputClassName?: string
    inputIconContainerClassName?: string
    comboboxButtonClassName?: string
    descriptionText?: string
    descriptionClassName?: string
    errorMessageClassName?: string
    children: React.ReactNode | ((item: T) => React.ReactNode)
  }
>

const Combobox = <T extends object>({
  labelText,
  labelClassName,
  fieldContainerClassName,
  inputContainerClassName,
  placeholder = 'Choose',
  inputClassName,
  inputIconContainerClassName,
  comboboxButtonClassName,
  descriptionText,
  descriptionClassName,
  errorMessageClassName,
  children,
  menuTrigger = 'focus',
  isRequired = true,
  isInvalid = false,
  ...props
}: ComboboxProps<T>) => {
  // const inputRef = useRef<HTMLInputElement>(null)
  // const [value, setValue] = useState(props.inputValue)
  // const { pressProps, isPressed } = usePress({
  //   onPressEnd: (e) => inputRef.current?.focus(),
  //   onPress: (e) => {
  //     setValue('')
  //     props.onInputChange?.('')
  //   },
  // })

  return (
    <RACComboBox
      {...props}
      menuTrigger={menuTrigger}
      isRequired={isRequired}
      isInvalid={isInvalid}
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
          <Input
            placeholder={placeholder}
            // value={value}
            // onChange={(e) => {
            //   setValue(e.target.value)
            //   props.onInputChange?.(e.target.value)
            // }}
            // onFocus={(e) => {
            //   const el = e.target
            //   el.select()
            //   el.setSelectionRange(el.selectionEnd, el.selectionEnd)
            // }}
            className={composeRenderProps(inputClassName, (className, renderProps) =>
              inputSlot({ ...renderProps, className }),
            )}
          />

          <div className={inputIconContainerSlot({ className: inputIconContainerClassName })}>
            {/* {value && (
                <XCircleIcon
                  {...pressProps}
                  role='button'
                  tabIndex={0}
                  className={inputXCircleIconTv({})}
                />
              )} */}

            {isInvalid && (
              <Warning
                data-slot='warning-icon'
                weight='fill'
              />
            )}
          </div>
        </div>

        <Button
          className={composeRenderProps(comboboxButtonClassName, (className, renderProps) =>
            comboboxButtonSlot({ ...renderProps, className }),
          )}
        >
          <CaretDown weight='bold' />
        </Button>
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

      <Popover
        offset={2}
        containerPadding={0}
        className={clsx([
          //
          'entering:animate-in entering:duration-300 entering:ease-out',
          // 'exiting:animate-in exiting:duration-200 exiting:ease-in',
          'entering:zoom-in-[0.99]',
          // 'exiting:zoom-out-[0.99]',
          'origin-top',

          'w-[--trigger-width]',
          'rounded bg-neutral-4',
          'border border-neutral-2',
          'shadow-dialog',
        ])}
      >
        <ListBox>{children}</ListBox>
      </Popover>
    </RACComboBox>
  )
}

export default Combobox
