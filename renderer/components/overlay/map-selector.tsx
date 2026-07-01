'use client'

import { MapInterface, PUBG_MAPS } from '@/data'

interface MapSelectorProps {
  selectedMap: MapInterface | null
  onSelectMap: (map: MapInterface) => void
}

export default function MapSelector({
  selectedMap,
  onSelectMap
}: MapSelectorProps) {
  return (
    <div className="flex h-full flex-col gap-2 overflow-y-auto p-4">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
        Map
      </h2>
      {PUBG_MAPS.map(map => (
        <button
          key={map.id}
          onClick={() => onSelectMap(map)}
          className={`rounded-md px-4 py-3 text-left text-sm font-medium transition-all ${
            selectedMap?.id === map.id
              ? 'border border-white/30 bg-white/20 text-white'
              : 'border border-transparent bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90'
          } `}>
          <div className="flex items-center justify-between">
            <span>{map.name}</span>
            <span className="text-xs opacity-70">
              {map.width / 1000}x{map.height / 1000}km
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}
