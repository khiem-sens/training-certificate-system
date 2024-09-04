'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '../Button/CustomButton'
import { Plus, MagnifyingGlass } from '@phosphor-icons/react'
import Input from '../TextField/CustomTextField'
import clsx from 'clsx'

const Header = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')

  const handleCreateNewClick = () => {
    router.push('/form')
  }

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Reset to the first page and update the search parameter in the URL
    router.push(`?page=1&search=${encodeURIComponent(searchValue)}`)
  }

  return (
    <div
      className={clsx([
        'px-20 pt-10 pb-8',
        'flex items-center gap-6',
      ])}
    >
      <h1 className='grow text-h1 text-neutral-1'>Training Certificates</h1>
      <div
        className={clsx([
          'shrink-0',
          'flex items-center gap-2',
        ])} 
      >
        <div className="relative w-80">
          <Input
            placeholder='Search'
            type='search'
            inputMode='search'
            value={searchValue}
            onChange={handleSearchChange} 
            isRequired={false}
          />
          {!searchValue && (
            <MagnifyingGlass
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-1 size-4"
            />
          )}
        </div>
        <Button onPress={handleCreateNewClick} className='shrink-0'>
          <Plus />
          Create new
        </Button>
      </div>
    </div>
  )
}

export default Header
