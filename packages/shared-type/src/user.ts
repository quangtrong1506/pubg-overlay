export type CommonProperty = {
  _id?: number | string
  name?: string
  code?: string
  description?: string
}

export type UserInterface = {
  _id?: number | string
  title?: string
  birthday?: string
  relatives_phone?: string
  phone?: string
  email?: string
  cccd?: string
  cccd_date?: string
  address?: string
  pr_address?: string
  user_group_permission_id?: number
  is_realtor?: number
  sub_group_permission_id?: number
  job_title?: string
  job_title_id?: number
  details?: string
  detail1s?: string
  detail2s?: string
  warehouse?: string
  branch_id?: number
  block_id?: number | string
  depart_id?: number
  avatar?: string
  group_id?: number
  status?: number
  joined_date?: string | null
  token?: string
  facebook_link?: string
  expiration_date?: string | null
  order_1?: number
  order_2?: number
  full_name?: string
  enable_block_manager?: boolean
  block_manager?: boolean
  branch_name?: string
  branch_head?: number
  depart_name?: string
  depart_code?: string
  group_name?: string
  block_name?: string
  job_title_code?: string
  training?: number
  total_training?: number
  fCity?: CommonProperty | CommonProperty[]
  fDistricts?: CommonProperty[]
  fPriceRange?: CommonProperty[]
  fFeature?: CommonProperty[]
  medals?: {
    _id?: number | string
    name?: string
    image?: string
  }[]
  sticker_data?: string[]
  full_job_title?: string
  avatar_link?: string
  permission?: string[]
  refresh_token?: string
  first_name?: string
  last_name?: string
  many_login?: false
  config?: string[]
  timeReNew?: number
  last_online?: true | string
  total_remaining_days?: null | number
  pms_data?: string[]
} & UserPoint

export type UserPoint = {
  point?: number | undefined
  call_point?: number | undefined
  support_point?: number | undefined
  negotiation_point?: number | undefined
  sign_point?: number | undefined
  edit_point?: number | undefined
  point_data?:
    | boolean
    | {
        star_1?: number
        star_2?: number
        star_3?: number
        star_4?: number
        star_5?: number
        total_start?: number
      }
}

export type UserRealtor = {
  _id?: number
  full_name?: string
  job_title?: string
  full_job_title?: string
  job_title_code?: string
  avatar_link?: string
  title?: string
  email?: string
  phone?: string
  cccd?: string
  facebook_link?: string
  branch_name?: string
  block_id?: number | string
  block_name?: string
  depart_id?: number
  depart_name?: string
  depart_code?: string
  group_name?: string
  status?: number
} & UserPoint
