export interface LocationInterface {
  _id: number
  name: string
  code: string
  slug: string
  lat?: string
  lng?: string
  delete?: number
  author_id?: number
  created_date?: string | null
  updated_date?: string | null
}

export type CityInterface = LocationInterface

export type DistrictInterface = LocationInterface & {
  city: number
}

export type StreetInterface = LocationInterface & {
  city: number
  district: number
}

/** Dự án */
export interface ProjectInterface {
  _id: string
  name: string
  code: string
  description: string
  order: number
  city: number
  district: number
  author_id: number
  created_date: string | null
  updated_date: string | null
  author_name: string
  city_name: string
  district_name: string
}
