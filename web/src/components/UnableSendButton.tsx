'use client';

import { PaperPlaneTilt } from '@phosphor-icons/react';

export function UnableSendButton() {
  return (
    <div className="flex p-2 w-14 h-14 justify-center items-center text-3xl font-semibold text-zinc-500 bg-zinc-700 rounded-md">
      <PaperPlaneTilt />
    </div>
  );
}
