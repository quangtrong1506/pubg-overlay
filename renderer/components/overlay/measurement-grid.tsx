'use client'

import { useCallback, useEffect, useRef } from 'react'

export interface Point {
  x: number
  y: number
}

interface MeasurementGridProps {
  mapSize: number
  points: Point[]
  secretBunkers: [number, number][]
  onAddPoint: (point: Point) => void
}
const CANVAS_SIZE = 2000

export default function MeasurementGrid({
  mapSize,
  points,
  secretBunkers,
  onAddPoint
}: MeasurementGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const gridCount = mapSize / 1000
    const cellSize = CANVAS_SIZE / gridCount
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 1
    // Vẽ lưới
    for (let i = 0; i <= gridCount; i++) {
      const pos = i * cellSize
      ctx.beginPath()
      ctx.moveTo(pos, 0)
      ctx.lineTo(pos, CANVAS_SIZE)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(0, pos)
      ctx.lineTo(CANVAS_SIZE, pos)
      ctx.stroke()
    }

    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    ctx.strokeRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

    // Vẽ các điểm đã chấm
    points.forEach(point => {
      const px = point.x
      const py = point.y
      ctx.strokeStyle = '#FF0000'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(px, py, 8, 0, Math.PI * 2)
      ctx.stroke()
    })

    secretBunkers.forEach(([bx, by]) => {
      const px = (bx / mapSize) * CANVAS_SIZE
      const py = (by / mapSize) * CANVAS_SIZE
      ctx.strokeStyle = 'rgba(239, 68, 68, 1)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(px, py, 16, 0, Math.PI * 2)
      ctx.stroke()
    })

    if (points.length >= 2) {
      const dx = points[1].x - points[0].x
      const dy = points[1].y - points[0].y
      const pixelDistance = Math.sqrt(dx * dx + dy * dy)
      const distanceInMeters = (pixelDistance / CANVAS_SIZE) * mapSize
      const midX = (points[0].x + points[1].x) / 2 + 10
      const midY = (points[0].y + points[1].y) / 2 + 10
      ctx.strokeStyle = '#FFEA6C'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      ctx.lineTo(points[1].x, points[1].y)
      ctx.stroke()
      ctx.setLineDash([])

      const text = `${distanceInMeters.toFixed(0)}m`

      ctx.font = '22px arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'

      const padding = 4
      const textWidth = ctx.measureText(text).width
      const textHeight = 24

      // Nền trắng
      ctx.fillStyle = '#fff'
      ctx.fillRect(
        midX - textWidth / 2 - padding,
        midY - textHeight - padding - 2,
        textWidth + padding * 2,
        textHeight + padding
      )

      // Chữ
      ctx.fillStyle = '#FF0000'
      ctx.fillText(text, midX, midY - 4)
    }
  }, [points, secretBunkers])

  useEffect(() => {
    drawGrid()
  }, [drawGrid])

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top
    const x = (clickX / rect.width) * CANVAS_SIZE
    const y = (clickY / rect.height) * CANVAS_SIZE
    console.log(
      `${((x * mapSize) / CANVAS_SIZE).toFixed(0)}, ${((y * mapSize) / CANVAS_SIZE).toFixed(0)}`
    )

    onAddPoint({ x, y })
  }

  return (
    <div className="flex size-full flex-1 items-center justify-center">
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onClick={handleClick}
        className="h-full cursor-crosshair object-contain"
      />
    </div>
  )
}

export { MeasurementGrid }
