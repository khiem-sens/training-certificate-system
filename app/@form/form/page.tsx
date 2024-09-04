'use client'
import React, { useState } from 'react'
import Modal from '@/components/Modal/Modal'
import Button from '@/components/Button/CustomButton'
import Input from '@/components/TextField/CustomTextField'
import ComboBox from '@/components/ComboBox/ComboBox'
import PopupNotification from '@/components/PopupNotification/PopupNotification'
import { ListBoxItem } from 'react-aria-components'

export default function FormCreatePage() {
  const [showPopup, setShowPopup] = useState(false)

  const handleCancelClick = () => {
    setShowPopup(true)
  }

  const handlePopupClose = () => {
    setShowPopup(false)
  }

  const courseTitles = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5']
  const organizationTitles = ['Organization 1', 'Organization 2', 'Organization 3', 'Organization 4', 'Organization 5']

  return (
    <Modal>
      <aside className='fixed top-0 right-0 flex flex-col bg-white border border-zinc-300 shadow-lg w-[500px] max-w-full h-screen z-50 '>
        <header className='flex items-center justify-between px-6 py-4 border-b border-zinc-300'>
          <h2 className='text-lg font-bold text-zinc-800 '>Create new certificate</h2>
          <div className='flex gap-2'>
            <Button
              variant='secondary'
              onPress={handleCancelClick}
            >
              Cancel
            </Button>
            <Button variant='primary' >Save</Button>
          </div>
        </header>
        <section className='flex-1 px-6 py-4 overflow-auto'>
          <form className='flex flex-col gap-6'>
            <Input
              labelText='Granted name'
              type='text'
              inputMode='text'
            />
            <ComboBox
              labelText='Organization title'
              id='organizationTitle'
              isRequired
            >
              {organizationTitles.map((title) => (
                <ListBoxItem key={title} textValue={title}>
                  {title}
                </ListBoxItem>
              ))}
            </ComboBox>

            <ComboBox
              labelText='Course title'
              id='courseTitle'
              isRequired
            >
              {courseTitles.map((title) => (
                <ListBoxItem key={title} textValue={title}>
                  {title}
                </ListBoxItem>
              ))}
            </ComboBox>
          </form>
        </section>
      </aside>

      {showPopup && (
        <PopupNotification
          title='Confirm Sign Out'
          message='Are you sure you want to sign out?'
          onConfirm='Confirm'
          onCancel='Cancel'
          route='/signout'
          onClose={handlePopupClose}
        />
      )}
    </Modal>
  )
}
