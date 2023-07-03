import Image from 'next/image'
import { ReactNode } from 'react'

interface MessageBoxProps {
  children: ReactNode
}

export default function MessageBox({ children }: MessageBoxProps) {
  return (
    <div className="flex-col">
      <a
        href=""
        className="mb-1 flex items-center gap-2 text-sm font-normal text-slate-300"
      >
        <Image
          src="/DefaultUserImg.svg"
          className="w-7 rounded-full"
          alt="User profile picture"
        />
        UserName
      </a>
      <div className="inline-block w-80vw min-w-40 whitespace-normal rounded-md bg-zinc-700 p-4 sm:w-50vw lg:w-33vw">
        <p className="text-base font-normal text-slate-100">{children}</p>
      </div>
    </div>
  )
}
