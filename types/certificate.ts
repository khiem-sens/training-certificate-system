import { PaginationType } from "./pagination"

export type Certificate = {
  id: string
  grantedName: string
  courseTitle: string
  organization: string
  createdBy: string
  uid: string | null
  downloadUrl: string | null
}

export type GetCertificatesResponse = {
  data: Certificate[]
  pagination: PaginationType
}