'use client';

import { PaperPlaneTilt } from '@phosphor-icons/react';

export function SendButton() {
  return (
    <button
      type="submit"
      className="flex p-2 w-14 h-14 justify-center items-center text-3xl font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
    >
      <PaperPlaneTilt />
    </button>
  );
}
