import { CommentInterface } from './comment'
import { CommonFile } from './message'
import { UserInterface } from './user'

/**
 * Danh mục bài viết (Hiện chỉ có ở Quy định hướng dẫn)
 */
export interface FeedCategoryInterfaceShort {
  _id: string
  title: string
}
export interface FeedCategoryInterface {
  _id: number | string
  scope: number
  title: string
  description: string
  order: number
  status: number
  author_id: number
  delete: number
  created_date: string
  updated_date: string
  code: string
  author: UserInterface
}
interface Address {
  city: number
  district: number
  street: number
  city_name: string
  district_name: string
}
/**
 * Data khách cần mua gấp
 */
export interface UrgentlyDataInterface {
  address: Address[]
  price: string
  area: string
  request: string
  purpose: string
  branch: number
}

/**
 * Data quy định và hướng dẫn
 */
export interface RegulationDataInterface {
  order: number
  description?: string
  description_2s?: string
  description_s?: string
}

//
export interface FeedBaseInterface {
  _id?: number | string
  author?: UserInterface
  author_id?: number
  category?: FeedCategoryInterfaceShort
  channel?: string
  comments?: CommentInterface[]
  content?: string
  created_date?: string
  delete?: 0 | 1
  feature_date?: string
  id?: number
  isLike?: boolean
  is_update?: boolean
  like_data?: UserInterface[]
  lock_comment?: 0 | 1
  media?: CommonFile[]
  scope?: number
  status?: number
  tags?: string[]
  total_comment?: number
  total_like?: number
  total_views?: number
  updated_date?: string
}

/**
 * Feed bình thường (Thông báo công ty, vụ chốt, thư viện)
 */
export type FeedDealInterface = FeedBaseInterface

/**
 * Feed dạng khách cần mua gấp (Urgently)
 */
export interface FeedUrgentlyInterface extends FeedBaseInterface {
  data: UrgentlyDataInterface
}
/**
 * Feed dạng quy định và hướng dẫn
 */
export interface FeedRegulationInterface extends FeedBaseInterface {
  data: RegulationDataInterface
}
/**
 * Feed dạng thư viện
 */
export interface FeedLibInterface extends FeedBaseInterface {
  data: RegulationDataInterface
}

/**
 * Feed dạng kho
 */

export type FeedInterface = FeedDealInterface &
  FeedLibInterface &
  FeedUrgentlyInterface &
  FeedRegulationInterface
