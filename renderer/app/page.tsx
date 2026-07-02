import Image from 'next/image'
import Link from 'next/link'

function IndexPage() {
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
