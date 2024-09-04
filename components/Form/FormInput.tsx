'use client'

import getErrorMessage from '@/utils/getErrorMessage'
import { Controller, useFormContext } from 'react-hook-form'
import Input, { InputProps } from '../TextField/CustomTextField'
import { Assign } from '@/types/common'

type Props = Assign<
  InputProps,
  {
    name: string
  }
>

export default function FormInput({ name, ...props }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, disabled, ...restField } }) => (
        <Input
          errors={errors}
          isInvalid={!!getErrorMessage(name, errors)}
          {...props}
          {...restField}
        />
      )}
    />
  )
}
