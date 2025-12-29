import { UserInterface } from './user'

/** Thông báo cục bộ */
export type NotificationInterface = {
  _id?: string
  text?: string
  host_type?: number
  host_id?: string
  parent_host_type?: number
  parent_host_id?: string
  viewer?: number
  delete?: number
  author?: UserInterface
  other?: unknown
  created_date?: number
  updated_date?: number
}
