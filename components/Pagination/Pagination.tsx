import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import React, { useState, useEffect } from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onGotoPage: (event: React.FormEvent<HTMLFormElement>) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onGotoPage,
}) => {
  const [gotoPageInput, setGotoPageInput] = useState(currentPage.toString())

  useEffect(() => {
    setGotoPageInput(currentPage.toString())
  }, [currentPage])

  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 10
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }
    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  const handleGotoPageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGotoPageInput(event.target.value)
  }

  const handleGotoPageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const pageNumber = parseInt(gotoPageInput, 10)

    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber)
    }
  }

  return (
    <nav
      className='flex flex-wrap items-center justify-end gap-10 px-5 w-full md:px-20'
      aria-label='Pagination'
    >
      <div className='flex items-center gap-4'>
        <button
          className='w-6 p-0.5'
          aria-label='Previous page'
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <CaretLeft size={20} weight="regular" className='text-primary-1'/>
        </button>
        <div className='flex justify-start gap-1.5 w-full text-sm text-blue-800'>
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`px-1 py-0.5 w-6 hover:text-[#346fe0] ${page === currentPage ? 'text-blue-600 border-b border-blue-600' : ''}`}
              aria-current={page === currentPage ? 'page' : undefined}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className='w-6 p-0.5'
          aria-label='Next page'
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <CaretRight size={20} weight="regular" className='text-primary-1'/>
        </button>
      </div>
      <form
        onSubmit={handleGotoPageSubmit}
        className='flex items-center gap-2 text-sm text-zinc-800'
      >
        <label htmlFor='gotoPage'>Go to page</label>
        <input
          id='gotoPage'
          name='gotoPage'
          className='w-9 h-9 px-3 bg-white border border-zinc-300 rounded text-center'
          min='1'
          max={totalPages}
          value={gotoPageInput}
          onChange={handleGotoPageInputChange}
        />
        <span>/ {totalPages}</span>
      </form>
    </nav>
  )
}

export default Pagination
