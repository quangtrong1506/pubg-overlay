'use client'

import React from 'react'

export interface Point {
  x: number
  y: number
}

interface ResultsPanelProps {
  mapSize: number
  points: Point[]
  onClear: () => void
}

function calculateDistance(p1: Point, p2: Point, mapSize: number): number {
  const dx = p2.x - p1.x
  const dy = p2.y - p1.y
  const pixelDistance = Math.sqrt(dx * dx + dy * dy)
  return (pixelDistance / mapSize) * 8000
}

export default function ResultsPanel({
  mapSize,
  points,
  onClear
}: ResultsPanelProps) {
  const distances: number[] = []
  for (let i = 0; i < points.length - 1; i++) {
    distances.push(calculateDistance(points[i], points[i + 1], mapSize))
  }
  const totalDistance = distances.reduce((sum, d) => sum + d, 0)

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto bg-white/95 p-4 text-gray-900 backdrop-blur-sm">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800">
        Measurements
      </h2>

      {points.length === 0 ? (
        <p className="text-sm text-gray-500">
          No points placed yet. Click on the grid to start measuring.
        </p>
      ) : (
        <>
          <div className="space-y-3">
            {points.map((point, index) => (
              <div
                key={`point-${index}`}
                className="rounded-md border border-gray-200 bg-gray-100 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-gray-600">
                    Point {index + 1}
                  </span>
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-blue-500/30 text-xs font-bold text-blue-700">
                    {index + 1}
                  </span>
                </div>
                <div className="font-mono text-xs text-gray-600">
                  X: {point.x.toFixed(1)}m
                </div>
                <div className="font-mono text-xs text-gray-600">
                  Y: {point.y.toFixed(1)}m
                </div>
              </div>
            ))}
          </div>

          {distances.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-600">
                Segments
              </p>
              {distances.map((dist, index) => (
                <div
                  key={`segment-${index}`}
                  className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-100 p-2">
                  <span className="text-sm text-gray-700">
                    P{index + 1} → P{index + 2}
                  </span>
                  <span className="font-mono text-sm text-gray-900">
                    {dist.toFixed(1)}m
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="rounded-md border border-blue-400/30 bg-blue-500/10 p-4">
            <p className="mb-1 text-xs text-blue-700/80">Total Distance</p>
            <p className="font-mono text-2xl font-bold text-gray-900">
              {totalDistance.toFixed(1)}m
            </p>
          </div>

          <button
            onClick={onClear}
            className="mt-auto w-full rounded-md border border-red-500/30 bg-red-500/20 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-500/30">
            Clear All Points
          </button>
        </>
      )}
    </div>
  )
}

export { ResultsPanel }
