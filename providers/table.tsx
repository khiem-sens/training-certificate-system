'use client'

import { createContext, PropsWithChildren, useContext } from 'react'

type TableContextType = {
  page: number
  totalPage: number
}

const TableContext = createContext<TableContextType | null>(null)

export const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) throw new Error('useTableContext must be used within a TableProvider')
  return context
}

type TableProviderProps = PropsWithChildren<TableContextType>

export default function TableProvider({ page, totalPage, children }: TableProviderProps) {
  return <TableContext.Provider value={{ page, totalPage }}>{children}</TableContext.Provider>
}
