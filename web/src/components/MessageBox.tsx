import Image from 'next/image'
import { User } from 'utils/types';
import { ReactNode } from 'react'
import getUserImageSrc from 'utils/getUserImageSrc'

interface MessageBoxProps {
  children: ReactNode;
  user: User;
}
export default function MessageBox({ children, user }: MessageBoxProps) {
  const imageUrl = getUserImageSrc(user);


  return (
    <div className="mb-5">
      <a
        href=""
        className="mb-1 flex items-center gap-2 text-sm font-normal text-slate-300"
      >
        <Image
          src={imageUrl || '/DefaultUserImg.svg'}
          className="w-7 rounded-full"
          alt="User profile picture"
          width={28}
          height={28}
        />
        {user?.userName || 'undefined'}
      </a>
      <div className="inline-block w-auto  whitespace-normal rounded-md bg-zinc-700 p-4 ">
        <p className="text-base font-normal text-slate-100">{children}</p>
      </div>
    </div>
  )
}
