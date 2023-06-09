'use client';

import { X } from '@phosphor-icons/react';

export function XClose() {
  return (
    <button
      type="submit"
      className="flex p-2 w-10 h-10 justify-center items-center text-3xl font-semibold text-zinc-400 rounded-full hover:bg-zinc-600 focus:outline-none focus:bg-orange-500 focus:text-zinc-100"
    >
      <X />
    </button>
  );
}
