'use client'

import PdfCell from '@/components/home/pdf-cell'
import usePage from '@/hooks/use-page'
import useSearch from '@/hooks/use-search'
import TableProvider from '@/providers/table'
import { GetCertificatesResponse } from '@/types/certificate'
import clsx from 'clsx'
import ky from 'ky'
import {
  Cell,
  Column,
  composeRenderProps,
  Key,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components'
import useSWR from 'swr'
import { cellSlot, columnSlot, rowSlot, tableBodySlot, tableSlot } from '../ui/table/style'
import EmptyComponent from '../emty'
import TableLayout from '@/layout/table'
import Pagination from '../pagination'

type ColumnId = 'grantedName' | 'courseTitle' | 'organization' | 'createdBy' | 'uid' | 'pdf'
type ColumnItem = {
  id: ColumnId
  name?: string
  isRowHeader?: boolean
  className?: string
}
type CellItem = { id: Key } & Record<ColumnId, any>

const columns = [
  {
    id: 'grantedName',
    name: 'Granted name',
    isRowHeader: true,
    className: 'w-47.75',
  },
  {
    id: 'courseTitle',
    name: 'Course title',
    className: 'w-47.75',
  },
  {
    id: 'organization',
    name: 'Organization',
    className: 'w-47.75',
  },
  {
    id: 'createdBy',
    name: 'Created by',
    className: 'w-47.75',
  },
  {
    id: 'uid',
    name: 'UID',
    className: 'w-40',
  },
  {
    id: 'pdf',
    name: 'PDF',
    className: 'w-40.5',
  },
] satisfies ColumnItem[]

const fetcher = async ([url, page, search]: [string, number, string]) => {
  const response = await ky(url, {
    searchParams: { page, search, pageSize: 1 },
  }).json<GetCertificatesResponse>()
  return response
}

export default function HomeTable() {
  const page = usePage()
  const search = useSearch()
  const { data, isLoading, error } = useSWR(['/api/certificates', page, search], fetcher)
  console.log('🚀 ~ HomeTable ~ error:', error)
  console.log('🚀 ~ HomeTable ~ isLoading:', isLoading)
  console.log('🚀 ~ HomeTable ~ data:', data)

  if (!data) return null

  const rows = data.data.map((certificate) => ({
    ...certificate,
    uid: certificate.uid ?? <div className='text-semantic-red'>Processing&#8230;</div>,
    pdf: <PdfCell certificate={certificate} />,
  })) satisfies CellItem[]

  return (
    <TableProvider
      page={data.pagination.page}
      totalPage={data.pagination.totalPage}
    >
      <section
        className={clsx([
          //
          'grow',
          'overflow-hidden',
          'pb-10',
          'flex flex-col gap-4',
        ])}
      >
        <TableLayout
          className={clsx([
            //
            'max-h-full',
          ])}
        >
          <Table
            // selectionMode='single' makes <Row /> receives focus
            selectionMode='single'
            onSelectionChange={(key) => {
              console.log('🚀 ~ HomeTable ~ key:', key)
            }}
            aria-labelledby='Training Certificates'
            className={composeRenderProps('', (className, renderProps) =>
              tableSlot({ ...renderProps, className }),
            )}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <Column
                  isRowHeader={column.isRowHeader}
                  className={composeRenderProps(column.className, (className, renderProps) =>
                    columnSlot({ ...renderProps, className }),
                  )}
                >
                  {column.name}
                </Column>
              )}
            </TableHeader>

            <TableBody
              items={rows}
              renderEmptyState={() => (
                <EmptyComponent
                  className={clsx([
                    //
                    'sticky left-0',
                    'w-dvw',
                  ])}
                />
              )}
              className={composeRenderProps('', (className, renderProps) =>
                tableBodySlot({ ...renderProps, className }),
              )}
            >
              {(item) => (
                <Row
                  columns={columns}
                  className={composeRenderProps('', (className, renderProps) =>
                    rowSlot({ ...renderProps, className }),
                  )}
                >
                  {(column) => (
                    <Cell
                      className={composeRenderProps('', (className, renderProps) =>
                        cellSlot({ ...renderProps, className }),
                      )}
                    >
                      {item[column.id]}
                    </Cell>
                  )}
                </Row>
              )}
            </TableBody>
          </Table>
        </TableLayout>

        <Pagination
          className={clsx([
            //
            'shrink-0',
            'px-[--px]',
          ])}
        />
      </section>
    </TableProvider>
  )
}
