'use client'
import CertificateTable from '@/components/CertificateTable/CertificateTable'
import Header from '@/components/Header/Header'
import NavBar from '@/components/NavBar/NavBar'
import { Suspense } from 'react'
import {Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover} from 'react-aria-components';

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Header />
      <CertificateTable />
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
  )
}
