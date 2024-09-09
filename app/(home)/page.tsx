'use client'
import Header from '@/components/home/home-header'
import { Suspense } from 'react'
import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from 'react-aria-components'
import NavBar from '@/components/navbar/navbar'
import HomeTable from '@/components/home/home-table'
import MainLayout from '@/layout/main'

export default function HomePage() {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Header />
        <HomeTable />
        {/* <div>
        <CustomAriaLink href="/about" replace className="text-blue-500">
        Chuyển đến trang About (thay thế trang hiện tại)
        </CustomAriaLink>
        <br />
        <CustomAriaLink href="/contact" className="text-blue-500">
        Chuyển đến trang Contact (thêm vào lịch sử)
        </CustomAriaLink>
        </div> */}
      </Suspense>
    </MainLayout>
  )
}
