import { UserInterface } from './user'

export interface CommentInterface {
  _id?: number | string
  author?: UserInterface
  author_id?: number | string
  content?: string
  created_date?: string
  delete?: 0 | 1
  follow?: []
  id?: number
  image?: string
  image_link?: false | string
  isEdited?: boolean
  isLike?: boolean
  level?: number
  newsfeed_id?: number | string
  parent?: number | string
  total_likes?: number
  updated_date?: string
  //Thêm
  sending?: boolean
  erorr?: boolean
}
