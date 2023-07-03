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
        className="flex items-center mb-1 gap-2 text-slate-300 text-sm font-normal"
      >
        <Image
          src="/DefaultUserImg.svg"
          className="rounded-full w-7"
          alt="User profile picture"
        />
        UserName
      </a>
      <div className="rounded-md bg-zinc-700 inline-block whitespace-normal p-4 w-80vw sm:w-50vw lg:w-33vw min-w-40">
        <p className="text-slate-100 text-base font-normal">{children}</p>
      </div>
    </div>
  )
}
