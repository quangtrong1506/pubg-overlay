export interface ChatBoxThemeInterface {
  id: number
  name: string
  value: string
  icon?: string
  dataColor?: {
    dark?: {
      author?: {
        background?: string
        text?: string
        name?: string
      }
      other?: {
        background?: string
        text?: string
        name?: string
      }
    }
    light?: {
      author?: {
        background?: string
        text?: string
        name?: string
      }
      other?: {
        background?: string
        text?: string
        name?: string
      }
    }
  }
  type: 'color' | 'image'
}
