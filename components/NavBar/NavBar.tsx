'use client'
import React, { useState, useEffect, useRef } from 'react'
import AdminDropdown from '../Dropdown/Dropdown'
import Button from '../Button/CustomButton'
import IhiLogoIcon from '@/public/icons/ihi-logo'
import clsx from 'clsx'
import { CaretDown } from '@phosphor-icons/react'

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('certificates') // Default to 'certificates'
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <header
      className={clsx([
        'px-20 py-3',
        'flex items-center justify-between',
        'shadow-border-b-neutral-2',
      ])}
    >
      <IhiLogoIcon className='w-auto h-7' />
      <div
        className='flex items-center gap-2 relative'
        ref={dropdownRef}
      >
        <img
          loading='lazy'
          src='/images/avatar.svg'
          alt='Avatar'
          className='w-6 aspect-square object-contain'
        />
        <div className='relative flex items-center'>
          <Button
            onPress={handleDropdownToggle}
            variant='ghost'
          >
            Admin_name
          </Button>
          {isDropdownOpen && (
            <div className='absolute top-full right-0 mt-2 bg-white border border-zinc-300 rounded shadow-lg'>
              <AdminDropdown />
            </div>
          )}
          <CaretDown
            onClick={handleDropdownToggle}
            className='w-4 h-4 text-primary-1'
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar
