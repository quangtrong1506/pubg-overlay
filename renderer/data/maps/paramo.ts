import { MapInterface } from './map'

export const paramoMap: MapInterface = {
  name: 'Paramo',
  image: '/maps/paramo.webp',
  description:
    'Paramo is the original map of PUBG, featuring a mix of urban and rural environments. It offers a variety of terrains, including forests, hills, and open fields, making it a versatile battleground for players.',
  id: 'paramo',
  width: 3000,
  height: 3000,
  secretBunkers: [
    [832, 1074],
    [1192, 949],
    [1872, 1474],
    [377, 1907],
    [1299, 1889],
    [1811, 1809],
    [2446, 1715],
    [1549, 2407]
  ]
}
