export enum IpcKey {
  /** Đóng cửa sổ */
  Window_Close = 'Window_Close',
  /** Thu nhỏ cửa số xuống taskbar */
  Window_Minimized = 'Window_Minimized',
  /** Thu nhỏ hoặc maximize cửa sổ */
  Window_Maximized = 'Window_Maximized',
  /** App hay web */
  IS_APP = 'IS_APP',

  /** Lưu và cập nhật tin nhắn mẫu */
  SAVE_SAMPLE_MESSAGES = 'Save_Sample_Messages',
  /** Xoá tin nhắn mẫu */
  DELETE_SAMPLE_MESSAGES = 'Delete_Sample_Messages',
  /** Lấy tất các tin nhắn mẫu */
  GET_SAMPLE_MESSAGES = 'Get_Sample_Messages',

  /** Lưu tài khoản mới/ cập nhật tài khoản (local) */
  SAVE_ACCOUNT_LOGIN = 'Save_Account_Login',

  /** Lấy toàn bộ tài khoản */
  GET_ACCOUNT_LOGIN = 'Get_account_login',
  /** Bỏ tự đăng nhập */
  CLEAR_ACCOUNT_LAST = 'clear_account_last',
  /** Xóa tài khoản đã nhớ trước đó */
  REMOVE_ACCOUNT_LOGIN = 'remove_account_login'
}
export type IpcKeyInterface = keyof typeof IpcKey

export type IPCResponseInterface = {
  [IpcKey.Window_Close]: {
    data: boolean
    status: 'success' | 'error'
    message?: string
  }
  [IpcKey.Window_Minimized]: {
    minimized: boolean
    status: 'success' | 'error'
    message?: string
  }
  [IpcKey.Window_Maximized]: {
    maximized: boolean
    status: 'success' | 'error'
    message?: string
  }
  [IpcKey.IS_APP]: {
    isApp: boolean
    status: 'success' | 'error'
    message?: string
  }
  [IpcKey.SAVE_SAMPLE_MESSAGES]: {
    status: 'success' | 'error'
    message?: string
  }
  [IpcKey.DELETE_SAMPLE_MESSAGES]: {
    status: 'success' | 'error'
    message?: string
  }
  [IpcKey.GET_SAMPLE_MESSAGES]: {
    status: 'success' | 'error'
    messages?: {
      _id?: number | string
      text?: string
      name?: string
    }[]
    message?: string
  }

  [IpcKey.SAVE_ACCOUNT_LOGIN]: {
    status: 'success' | 'error'
    message?: string
  }
  [IpcKey.GET_ACCOUNT_LOGIN]: {
    status: 'success' | 'error'
    data?: {
      last?: {
        username?: string
        password?: string
        remember?: boolean
      }
      all: {
        username?: string
        password?: string
      }[]
    }
    message?: string
  }
  [IpcKey.CLEAR_ACCOUNT_LAST]: {
    status: 'success' | 'error'
    message?: string
  }
  [IpcKey.REMOVE_ACCOUNT_LOGIN]: {
    status: 'success' | 'error'
    message?: string
  }
}

export interface IpcBodyInterface {
  [IpcKey.Window_Close]: null

  [IpcKey.Window_Minimized]: {
    minimized: boolean
  }

  [IpcKey.Window_Maximized]: {
    maximized: boolean
  }

  [IpcKey.IS_APP]: null

  [IpcKey.SAVE_SAMPLE_MESSAGES]: {
    userId: string
    message: {
      _id?: number | string
      text?: string
      name?: string
    }
  }

  [IpcKey.DELETE_SAMPLE_MESSAGES]: {
    userId: string
    _id?: number | string
  }

  [IpcKey.GET_SAMPLE_MESSAGES]: {
    userId: string
  }

  [IpcKey.SAVE_ACCOUNT_LOGIN]: {
    username?: string
    password?: string
    remember?: boolean
  }
  [IpcKey.GET_ACCOUNT_LOGIN]: null
  [IpcKey.CLEAR_ACCOUNT_LAST]: {
    username?: number | string
  }
  [IpcKey.REMOVE_ACCOUNT_LOGIN]: {
    username?: number | string
  }
}
