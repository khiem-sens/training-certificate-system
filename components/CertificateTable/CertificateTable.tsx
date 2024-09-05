'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { Table, TableHeader, TableBody, Row, Cell, Column } from 'react-aria-components'
import Pagination from '../Pagination/Pagination'
import { certificateData, CertificateData } from '@/data/certificateData'
import { DownloadSimple, Eye } from '@phosphor-icons/react'

const CertificateTable: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [certificates, setCertificates] = useState<CertificateData[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const totalPages = Math.ceil(certificates.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = certificates.slice(indexOfFirstItem, indexOfLastItem)

  useEffect(() => {
    const page = searchParams.get('page')
    const search = searchParams.get('search') || ''

    setCurrentPage(page ? parseInt(page, 10) : 1)

    // Assuming certificateData is the source of truth or fetched from an API
    // Filter certificateData based on the search term
    const filteredCertificates = certificateData.filter((certificate) =>
      certificate.name.toLowerCase().includes(search.toLowerCase()),
    )

    setCertificates(filteredCertificates)
  }, [searchParams])

  const handleViewClick = () => {
    router.push('/certification')
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    const search = searchParams.get('search') || ''
    router.push(`?page=${pageNumber}&search=${encodeURIComponent(search)}`)
  }

  const handleGotoPage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const input = form.elements.namedItem('gotoPage') as HTMLInputElement
    const page = parseInt(input.value, 10)
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      const search = searchParams.get('search') || ''
      router.push(`?page=${page}&search=${encodeURIComponent(search)}`)
    }
  }

  return (
    <div className='relative w-full h-[calc(100vh-15.625rem)] text-body-sm text-neutral-1 '>
      <div className='overflow-y-auto h-full'>
        <Table
          aria-label='Certificate Table'
          className='w-full'
          style={{ tableLayout: 'fixed' }}
        >
          <TableHeader className='sticky top-0 bg-neutral-3 border-t border-b border-neutral-2 whitespace-nowrap z-10'>
            <Column
              isRowHeader
              className='py-3 text-start text-body-sm-bold pl-20'
            >
              Granted Name
            </Column>
            <Column className='py-3 text-start text-body-sm-bold'>Course Title</Column>
            <Column className='py-3 text-start text-body-sm-bold'>Organization</Column>
            <Column className='py-3 text-start text-body-sm-bold'>Created By</Column>
            <Column className='py-3 text-start text-body-sm-bold'>UID</Column>
            <Column className='py-3 text-start text-body-sm-bold pr-20'>PDF</Column>
          </TableHeader>
          <TableBody>
            {currentItems.map((certificate, index) => {
              const isProcessing = certificate.uid === 'Processing...'
              return (
                <Row
                  key={index}
                  className='border-b gap-6 border-neutral-2 px-20'
                >
                  <Cell className='py-5 text-body-sm pl-20 '>{certificate.name}</Cell>
                  <Cell className='py-5 text-body-sm '>{certificate.courseTitle}</Cell>
                  <Cell className='py-5 text-body-sm '>{certificate.orgName}</Cell>
                  <Cell className='py-5 text-body-sm '>{certificate.adminName}</Cell>
                  <Cell className={`py-5 text-body-sm ${isProcessing ? 'text-semantic-red' : 'text-neutral-1'}`}>
                    {certificate.uid}
                  </Cell>
                  <Cell
                    className={`py-5 text-body-sm flex gap-4 pr-20 ${
                      isProcessing ? 'opacity-50 pointer-events-none' : 'bg-neutral-4'
                    }`}
                  >
                    <button
                      onClick={handleViewClick}
                      className='text-primary-1 w-17 flex gap-1 items-center'
                    >
                      <Eye
                        size={20}
                        weight='regular'
                      />
                      <span>View</span>
                    </button>
                    <button className='text-primary-1 flex gap-1 items-center'>
                      <DownloadSimple
                        size={20}
                        weight='regular'
                      />
                      <span>Download</span>
                    </button>
                  </Cell>
                </Row>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onGotoPage={handleGotoPage}
      />
    </div>
  )
}

export default CertificateTable
