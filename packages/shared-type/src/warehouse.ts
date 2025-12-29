import { CommentInterface } from './comment'
import { CityInterface, DistrictInterface, StreetInterface } from './location'
import { CommonFile } from './message'
import { CommonProperty, UserInterface } from './user'

/** Dữ liệu hàng */
export type WarehouseItemInterface = {
  _id?: number

  /** Loại hình */
  property_type?: CommonProperty

  /** Tiêu đề */
  title?: string

  /** Nội dung */
  content?: string

  /** Thành phố */
  city?: CityInterface

  /** Quận/huyện */
  district?: DistrictInterface

  /** Đường phố */
  street?: StreetInterface

  /** Ngõ, hẻm, số nhà, số phòng */
  house_number?: string

  /** Giá */
  price?: number

  /** Diện tích */
  area?: number

  /** Diện tích sử dụng */
  useable_area?: number

  /** Số tầng, tầng */
  floor?: number

  /** Mặt tiền */
  facade?: number

  /** Loại hợp đồng */
  contract_type?: CommonProperty

  /** Đặc điểm */
  property_feature?: CommonProperty[]

  /** Serial sổ */
  number_certificate?: string[]

  /** Ảnh */
  images?: CommonFile[]

  /** Audio ghi âm pháp lý, hợp đồng trích thưởng */
  audios?: CommonFile[]

  /** Video */
  videos?: CommonFile[]

  /** Ảnh sổ đỏ pháp lý, hợp đồng trích thưởng */
  private_images?: CommonFile[]

  /** Dự án */
  project?: string

  /** Pháp lý */
  legal_status?: CommonProperty

  price_range?: string

  status?: number

  /** Hiện trạng nhà */
  sale_status?: CommonProperty

  price_status?: number

  /** Loại hoa hồng */
  bonus_type?: number

  /** Hoa hồng */
  bonus_value?: number

  /** Cầu đối tác */
  bonus_referral?: string

  realtor_id?: number

  realtor_status?: number

  /** SĐT chủ nhà */
  owner_phone?: string

  delete?: number

  author_id?: number

  author_depart?: number

  author_branch?: number

  free?: number

  free_date?: number | null

  action_status?: number

  created_date?: string

  updated_date?: string

  down_price_date?: string

  feature_date?: string

  author?: UserInterface

  follow_content?: string

  follow_image?: CommonFile[]

  publish_data?: {
    status?: number
    reason?: string
    author_data?: UserInterface
  }

  /** Bộ sư tập */
  collections?: unknown[]

  /** Đã lưu */
  is_follow?: boolean

  /** Đã thích */
  is_like?: boolean

  total_customer?: number

  comments?: CommentInterface[]

  other?: {
    total_reports?: number
    total_comments?: number
    total_likes?: number
    total_follows?: number
    total_views?: number
    sale_status_time?: false | string
  }

  status_name?: string

  index?: number
}

export type WarehouseSaleStatusCode =
  | 'hachao'
  | 'dachot'
  | 'daban'
  | 'dungban'
  | 'tangchao'
  | 'tamdung'
  | 'banmanh'

export type WarehouseLegalStatusCode = 'so-do' | 'chua-so' | 'thieu-seri-so'

export type WarehouseHistoryLog = {
  title: string
  description: string
  sale_status: string
  status: number
  created_date: string | Date
  author: UserInterface | false
  sale_status_name: string
  status_name?: string
}
