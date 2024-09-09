'use client'

import { Assign } from '@/types/common'
import { Controller, useFormContext } from 'react-hook-form'
import TextField, { TextFieldProps } from '../ui/field/text-field'

type Props = Assign<
  Omit<TextFieldProps, 'value' | 'onChange' | 'isDisabled'>,
  {
    name: string
    disabled?: boolean
  }
>

export default function FormTextField({ name, disabled = false, ...props }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      render={({ field: { disabled, ...restField }, fieldState: { invalid } }) => (
        <TextField
          {...props}
          {...restField}
          isInvalid={invalid}
          isDisabled={disabled}
        />
      )}
    />
  )
}
