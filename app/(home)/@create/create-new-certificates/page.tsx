'use client'

import Drawer, { DrawerHeader } from '@/components/drawer'
import FormCombobox from '@/components/form/form-combobox'
import FormTextField from '@/components/form/form-text-field'
import Dialog from '@/components/ui/dialog'
import { listBoxItemTv } from '@/components/ui/field/style'
import wait from '@/utils/wait'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ListBoxItem } from 'react-aria-components'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const title = 'Create new certificates'
const formId = 'create-new-certificates'

const organizationOptions = [
  { id: 1, name: 'Organization 1' },
  { id: 2, name: 'Organization 2' },
  { id: 3, name: 'Organization 3' },
]
const courseOptions = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' },
]

const schema = z.object({
  grantedName: z.string().trim().min(1, 'Granted name is required!'),
  organizationTitle: z.string().trim().min(1, 'Organization title is required!'),
  courseTitle: z.string().trim().min(1, 'Course title is required!'),
})
type FormValues = z.infer<typeof schema>

export default function CreateNewCertificatesPage() {
  const router = useRouter()
  const [openDrawer, setOpenDrawer] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)

  const formMethods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      grantedName: '',
      organizationTitle: '',
      courseTitle: '',
    },
  })
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods
  console.log('🚀 ~ CreateNewCertificatesPage ~ errors:', errors)
  const onSubmit = handleSubmit((data) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
  })

  return (
    <>
      <Drawer
        aria-labelledby={title}
        isOpen={openDrawer}
        onOpenChange={async () => {
          if (!openDialog) {
            setOpenDialog(true)
          } else {
            setOpenDialog(false)
            await wait()
            setOpenDrawer(false)
            await wait()
            router.back()
          }
        }}
      >
        {({ close }) => (
          <>
            <DrawerHeader
              title={title}
              close={close}
              form={formId}
            />

            <FormProvider {...formMethods}>
              <form
                id={formId}
                onSubmit={onSubmit}
                className={clsx([
                  //
                  'overflow-auto',
                  'px-6 py-4',
                  'flex flex-col gap-6',
                ])}
              >
                <FormTextField
                  autoFocus
                  name='grantedName'
                  labelText='Granted name'
                />

                <FormCombobox
                  name='organizationTitle'
                  defaultItems={organizationOptions}
                  labelText='Organization title'
                >
                  {(item) => <ListBoxItem className={listBoxItemTv()}>{item.name}</ListBoxItem>}
                </FormCombobox>

                <FormCombobox
                  name='courseTitle'
                  defaultItems={courseOptions}
                  labelText='Course title'
                >
                  {(item) => <ListBoxItem className={listBoxItemTv()}>{item.name}</ListBoxItem>}
                </FormCombobox>
              </form>
            </FormProvider>

            <Dialog
              isOpen={openDialog}
              onOpenChange={setOpenDialog}
              title='Discard changes?'
              description='Your changes have not been saved yet.<br />Do you want to discard all changes?'
              cancelText='No, take me back'
              onOk={close}
              okText='Discard changes'
            ></Dialog>
          </>
        )}
      </Drawer>
    </>
  )
}
