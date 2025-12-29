import { ReactNode } from 'react'
import { UserInterface } from './user'

/** Reactions trên tin nhắn */
export interface MessageReactionInterface {
  count: number
  emoji: string
  userId: number | string
}

export type CommonFile = {
  _id: number | string
  location: string
  originalname?: string
  supplier?: string
}

/** interface của tin nhắn */
export interface MessageChatInterface {
  _id: number | string
  author?: UserInterface
  content?: string
  conversationId?: string
  createdAt?: string // ISO date string
  deletedAt?: string | null
  editedAt?: string | null
  images?: CommonFile[]
  isPinned?: boolean
  isReply?: boolean
  mentionedUserIds?: string[]
  reactions?: MessageReactionInterface[]
  replyTo?: Partial<MessageChatInterface>
  status?: 'sent' | 'sending' | 'seen' | 'failed'
  updatedAt?: string
  customType?: 'message' | 'notification' | 'time'
  customGroup?: {
    /** ID cua nhóm tin nhắn */
    id?: string | number
    /** Label trên đầu tin nhắn
     *
     * EG: Chưa đọc, Hôm nay, hôm qua, ...
     */
    label?: ReactNode
    /** Thông báo nhỏ ở bên dưới tin nhắn
     *
     * EG: Đã rời nhóm chat, thêm người...
     */
    miniNotification?: ReactNode

    /** Tin nhắn đầu trong nhóm */
    isFirst?: boolean

    /** Tin nhắn cuối trong nhóm */
    isLast?: boolean
  }
}
