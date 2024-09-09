import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'

const path = '/Users/Thien Khiem/OneDrive/SENS/bo/src/seed/certificates.json'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const search = searchParams.get('search') || ''

  const dataString = fs.readFileSync(path, { encoding: 'utf8' })
  const data = JSON.parse(dataString) as any[]

  const pageSize = (() => {
    const pageSize = parseInt(searchParams.get('pageSize') || '')
    if (isNaN(pageSize)) return 10
    return pageSize
  })()
  const totalPage = Math.ceil(data.length / pageSize)

  const page = (() => {
    const page = parseInt(searchParams.get('page') || '')
    if (isNaN(page)) return 1
    if (page > totalPage) return totalPage
    return page
  })()

  const start = (page - 1) * pageSize
  const end = start + pageSize

  return NextResponse.json({
    data: data.slice(start, end),
    pagination: {
      page,
      pageSize,
      totalPage,
      search,
    },
  })
}
