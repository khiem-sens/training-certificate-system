import { Assign } from '@/types/common'
import { ErrorMessage } from '@hookform/error-message'
import { Warning, Check } from '@phosphor-icons/react/dist/ssr'
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
  Checkbox,
} from 'react-aria-components'
import { FieldErrors } from 'react-hook-form'
import { VariantProps } from 'tailwind-variants'
import XCircleIcon from '@/public/icons/x-circle'
import { textFieldTv } from '../TextField/style'
import { CaretDown } from '@phosphor-icons/react'
import CheckMark from '@/public/icons/checkmark'

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
    checkbox,
    listBoxItem,
    listBoxItemCheckbox,
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
  const [selectedItems, setSelectedItems] = useState<Set<number | string>>(new Set())

  const handleCheckboxChange = (itemId: number | string) => {
    setSelectedItems((prev) => {
      const newSelectedItems = new Set(prev)
      if (newSelectedItems.has(itemId)) {
        newSelectedItems.delete(itemId)
      } else {
        newSelectedItems.add(itemId)
      }
      return newSelectedItems
    })
  }

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
              <div className={caretDownContainer({ className: caretDownContainerClassName })}>
                <Button
                  className=''
                  aria-label='Open Combobox'
                  iconOnly
                  variant='ghost'
                >
                  <CaretDown
                    weight='bold'
                    className='text-neutral-1'
                    style={{ width: '12px', height: '12px' }}
                  />
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
            placement='bottom start'
            style={{ minWidth: inputRef.current?.offsetWidth || '100%' }}
          >
            <ListBox className={listBox()}>
              {items.map((item) => (
                <ListBoxItem
                  key={item.id}
                  textValue={itemText(item)}
                >
                  <label className={listBoxItem()}>
                    {itemCheckbox && (
                      <Checkbox
                        isSelected={selectedItems.has(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        className={`${checkbox()} ${
                          selectedItems.has(item.id) ?
                            'bg-primary-1 ring-2 ring-primary-1'
                          : checkbox()
                        }`}
                      >
                        {selectedItems.has(item.id) && (
                          <CheckMark className={listBoxItemCheckbox()} />
                        )}
                      </Checkbox>
                    )}

                    <span>{itemText(item)}</span>
                  </label>
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
