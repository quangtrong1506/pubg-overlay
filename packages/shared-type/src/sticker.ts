import { CommonFile } from './message'
import { UserInterface } from './user'

export interface StickerInterface {
  _id?: string
  name?: string
  avatar?: string
  images?: string[]
  status?: number
  order?: number
  default?: number
  author_id?: number
  delete?: number
  created_date?: string
  updated_date?: string
  author?: UserInterface
  images_data?: CommonFile[]
  avatar_data?: {
    _id: string
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    size: number
    bucket: string
    key: string
    acl: string
    contentType: string
    contentDisposition: null
    contentEncoding: null
    storageClass: string
    serverSideEncryption: null
    metadata: {
      'Content-type': unknown
    }
    location: string
    etag: string
    versionId: undefined
    supplier: string
    delete: number
    created_date: string
    updated_date: string
  }
}
