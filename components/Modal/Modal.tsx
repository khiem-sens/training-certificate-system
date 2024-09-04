'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const handleClickModal = () => {
    router.back()
  }

  return (
    <>
      <div
        onClick={handleClickModal}
        className='w-full h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50'
      />
      <div>{children}</div>
    </>
  )
}

export default Modal
