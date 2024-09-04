'use client'

import Button from '@/components/Button/CustomButton'
import FormInput from '@/components/Form/FormInput'
import IhiLogoIcon from '@/public/icons/ihi-logo'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
)

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .email({ message: 'Invalid email. Please try again.' }),
  password: z
    .string()
    .trim()
    .min(1, 'Password is required')
    .regex(passwordValidation, { message: 'Invalid password. Please try again.' }),
})
type FormValues = z.infer<typeof schema>

export default function LoginPage() {

  const formMethods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods
  console.log('🚀 ~ LoginPage ~ errors:', errors)
  const onSubmit = handleSubmit((data) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
  })

  return (
    <div className='w-full max-w-125 grid justify-items-center gap-14'>
      <div className='grid justify-items-center gap-5'>
        <IhiLogoIcon />
        <p className='text-h2 text-primary-1'>Web3-based Training Certificates</p>
      </div>
      <FormProvider {...formMethods}>
        <form
          onSubmit={onSubmit}
          className='w-full grid gap-10'
        >
          <FormInput
            name='email'
            labelText='Email'
            inputMode='email'
            autoFocus
          />
          <FormInput
            name='password'
            labelText='Password'
            type='password'
          />
          <Button
            type='submit'
            className='w-fit justify-self-center'
          >
            <span>Sign in</span>
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
