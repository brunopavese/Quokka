'use client'

import React, { ButtonHTMLAttributes } from 'react'

import { PaperPlaneTilt } from '@phosphor-icons/react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isValid?: boolean
}

export default function SendButton({ isValid = true, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex h-14 w-14 items-center justify-center rounded-md p-2 text-3xl font-semibold ${
        isValid
          ? 'bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600 focus:outline-none'
          : 'bg-zinc-700 text-zinc-500'
      }`}
    >
      <PaperPlaneTilt />
    </button>
  )
}
