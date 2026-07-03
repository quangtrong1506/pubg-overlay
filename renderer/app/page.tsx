'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function IndexPage() {
  const [newVersion, setNewVersion] = useState<string>('')
  const [process, setProcess] = useState<{
    percent: number
    bytesPerSecond: number
    total: number
    transferred: number
  }>({
    percent: 0,
    bytesPerSecond: 0,
    total: 0,
    transferred: 0
  })

  useEffect(() => {
    const handleDownloadProgress = (progress: {
      percent: number
      bytesPerSecond: number
      total: number
      transferred: number
    }) => {
      setProcess(progress)
    }

    const handleNewVersion = (version: string) => {
      setNewVersion(version)
    }

    window.ipc.on('download-progress', handleDownloadProgress)
    window.ipc.on('update-available', handleNewVersion)

    return () => {
      window.ipc.off('download-progress', handleDownloadProgress)
      window.ipc.off('update-available', handleNewVersion)
    }
  }, [])

  return (
    <main className="dev flex flex-col items-center gap-2 pt-10 decoration-violet-50">
      <Image
        priority
        src="/images/logo.png"
        alt="logo"
        width={150}
        height={150}
      />
      <h1 className="text-lg font-semibold">
        Ứng dụng đã được chạy, bạn có thể đóng màn hình này
      </h1>
      <p>
        Ấn
        <code className="mx-2 bg-black/5 p-1">alt + M</code>
        để mở overlay
      </p>
      {newVersion && (
        <div className="mt-4 rounded bg-green-100 p-4 text-green-800">
          <p>Phiên bản mới đã có sẵn: {newVersion}</p>
        </div>
      )}
      {process.percent > 0 && (
        <div className="mt-4 rounded bg-blue-100 p-4 text-blue-800">
          <p>Đang tải xuống bản cập nhật...</p>
          <p>Tiến trình: {process.percent.toFixed(1)}%</p>
          <p>
            Tốc độ: {(process.bytesPerSecond / 1024 / 1024).toFixed(1)} MB/s
          </p>
          <p>
            Đã tải xuống: {(process.transferred / 1024 / 1024).toFixed(1)} MB /{' '}
            {(process.total / 1024 / 1024).toFixed(1)} MB
          </p>
        </div>
      )}
      <div className="mt-6">
        <Link
          className="text-indigo-600 underline"
          href="https://github.com/quangtrong1506/pubg-overlay">
          Donate
        </Link>
      </div>
    </main>
  )
}

export default IndexPage
