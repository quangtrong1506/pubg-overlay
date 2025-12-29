export const enum MentionTypeData {
  /** Bình luận của kho */
  Property = 2,
  /** Bình luận ở các bài feed */
  FEED = 3
}

export interface MentionsInterface {
  avatar_link?: string
  depart_code?: string
  full_job_title?: string
  job_title?: string
  job_title_code?: string
  title?: string
  type?: number
  _id?: number
}
