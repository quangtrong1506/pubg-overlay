'use client'

export default function ResultsPanel() {
  const handleClose = () => {
    window.ipc.send('overlay-close')
  }
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-4 text-gray-900 backdrop-blur-sm">
      <div
        className="cursor-pointer rounded-md border border-red-500 p-3 text-center font-semibold text-red-600"
        onClick={handleClose}>
        Đóng
      </div>
    </div>
  )
}

export { ResultsPanel }
