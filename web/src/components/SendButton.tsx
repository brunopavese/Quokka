'use client';

import React, { ButtonHTMLAttributes } from 'react';

import { PaperPlaneTilt } from '@phosphor-icons/react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isValid?: boolean;
};

export default function SendButton({ isValid = true, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex p-2 w-14 h-14 justify-center items-center rounded-md text-3xl font-semibold ${
        isValid
          ? 'text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:bg-orange-600'
          : 'text-zinc-500 bg-zinc-700'
      }`}
    >
      <PaperPlaneTilt />
    </button>
  );
}
