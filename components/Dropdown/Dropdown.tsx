'use client'
import React, { useState } from 'react'
import PopupNotification from '../PopupNotification/PopupNotification'

const AdminDropdown: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false) // State to control popup visibility

  const handleSignoutClick = () => {
    setShowPopup(true)
  }
  const handlePopupClose = () => {
    setShowPopup(false)
  }

  return (
    <>
      <nav
        onClick={handleSignoutClick}
        className='flex overflow-hidden flex-col justify-center w-32 max-w-full rounded border border-solid shadow-lg border-zinc-300 text-zinc-800 outline-none'
      >
        <ul className='flex flex-col w-full'>
          <li className='flex-1 shrink gap-3 self-stretch px-3 py-2 w-full'>
            <button className='w-full text-left'>Sign out</button>
          </li>
        </ul>
      </nav>

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
    </>
  )
}

export default AdminDropdown
