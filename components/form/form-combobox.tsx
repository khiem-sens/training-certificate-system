'use client'

import { Assign } from '@/types/common'
import { Controller, useFormContext } from 'react-hook-form'
import Combobox, { ComboboxOption, ComboboxProps } from '../ui/field/combobox'

type Props<T extends ComboboxOption> = Assign<
  ComboboxProps<T>,
  {
    name: string
    defaultItems: T[]
  }
>

export default function FormCombobox<T extends ComboboxOption>({
  name,
  defaultItems,
  ...props
}: Props<T>) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { disabled, ref, value, onChange, ...restField },
        fieldState: { invalid },
      }) => (
        <Combobox
          {...props}
          {...restField}
          isInvalid={invalid}
          defaultItems={defaultItems}
          inputValue={value}
          onInputChange={onChange}
          onSelectionChange={(id) => {
            onChange(defaultItems.find((o) => o.id === id)?.name || '')
          }}
        />
      )}
    />
  )
}
