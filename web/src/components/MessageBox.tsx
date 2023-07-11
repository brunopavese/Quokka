import Image from 'next/image'
import { ReactNode } from 'react'

interface MessageBoxProps {
  children: ReactNode
  userName?: string | Promise<any>
  key?: number
}

export default function MessageBox({
  children,
  userName = 'UserName',
}: MessageBoxProps) {
  return (
    <div className="mb-5">
      <a
        href=""
        className="mb-1 flex items-center gap-2 text-sm font-normal text-slate-300"
      >
        <Image
          src="/DefaultUserImg.svg"
          className="w-7 rounded-full"
          alt="User profile picture"
          width={28}
          height={28}
        />
        {userName}
      </a>
      <div className="inline-block w-auto  whitespace-normal rounded-md bg-zinc-700 p-4 ">
        <p className="text-base font-normal text-slate-100">{children}</p>
      </div>
    </div>
  )
}
