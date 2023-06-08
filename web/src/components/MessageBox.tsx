'use client';

export function MessageBox() {
  return (
    <div className="flex-col">
      <a
        href=""
        className="flex items-center mb-1 gap-2 text-slate-300 text-sm font-normal"
      >
        <img
          src="/DefaultUserImg.svg"
          className="rounded-full w-7"
          alt="User profile picture"
        />
        UserName
      </a>
      <div className="rounded-md bg-zinc-700 inline-block whitespace-normal p-4 max-w-2xl min-w-40">
        <p className="text-slate-100 text-l font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          laoreet ligula a convallis iaculis. Aenean arcu lorem, commodo vitae
          facilisis nec, facilisis ut nulla. Praesent porta rutrum risus, ut
          consequat massa porta a. Pellentesque dictum fringilla enim et luctus.
          Class aptent taciti molestie.
        </p>
      </div>
    </div>
  );
}
