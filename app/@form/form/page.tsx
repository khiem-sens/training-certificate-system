'use client'
import React, { useState } from 'react'
import Modal from '@/components/Modal/Modal'
import Button from '@/components/Button/CustomButton'
import Input from '@/components/TextField/CustomTextField'
import ComboBox from '@/components/ComboBox/ComboBox'
import PopupNotification from '@/components/PopupNotification/PopupNotification'

export default function FormCreatePage() {
  const [showPopup, setShowPopup] = useState(false)

  const handleCancelClick = () => {
    setShowPopup(true)
  }

  const handlePopupClose = () => {
    setShowPopup(false)
  }

  const organizationTitles = [
    { id: 1, title: 'Organization 1' },
    { id: 2, title: 'Organization 2' },
    { id: 3, title: 'Organization 3' },
    { id: 4, title: 'Organization 4' },
    { id: 5, title: 'Organization 5' },
  ]

  const courseTitles = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
    { id: 3, title: 'Course 3' },
    { id: 4, title: 'Course 4' },
    { id: 5, title: 'Course 5' },
  ]

  return (
    <Modal>
      <aside className='fixed top-0 right-0 flex flex-col bg-neutral-4 border border-neutral-2 shadow-lg w-[31.25rem] max-w-full h-screen z-50 '>
        <header className='flex items-center justify-between px-6 py-4 border-b border-neutral-2'>
          <h2 className='text-lg font-bold text-neutral-1'>Create new certificate</h2>
          <div className='flex gap-2'>
            <Button
              variant='secondary'
              onPress={handleCancelClick}
            >
              Cancel
            </Button>
            <Button variant='primary'>Save</Button>
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
              items={organizationTitles}
              itemText={(item) => item.title}
              itemCheckbox
            />
            <ComboBox
              labelText='Course title'
              id='courseTitle'
              isRequired
              items={courseTitles}
              itemText={(item) => item.title}
              itemCheckbox
            />
          </form>
        </section>
      </aside>

      {showPopup && (
        <PopupNotification
          title='Discard changes?'
          message='Your changes have not been saved yet. Do you want to discard all changes?'
          onConfirm='Discard changes'
          onCancel='No, take me back'
          route=''
          onClose={handlePopupClose}
        />
      )}
    </Modal>
  )
}
