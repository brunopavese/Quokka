'use client'

import { X } from '@phosphor-icons/react'

export default function XClose() {
  return (
    <button
      type="submit"
      className="flex h-10 w-10 items-center justify-center rounded-full p-2 text-3xl font-semibold text-zinc-400 hover:bg-zinc-600 focus:bg-orange-500 focus:text-zinc-100 focus:outline-none"
    >
      <X />
    </button>
  )
}
