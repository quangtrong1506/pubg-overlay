export interface MapInterface {
  name: string
  image: string
  description?: string
  id: string
  width: number
  height: number
  secretBunkers: [number, number][]
}
