import Link from 'next/link'

import MessageBox from 'components/MessageBox'
import TextInput from 'components/TextInput'

export default async function Home() {
  const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-800 px-8 py-20 md:py-8">
      <h1 className="text-2xl font-bold text-slate-100">Contagem:{data}</h1>
      <Link href="/login" className="text-xl font-bold text-slate-100">
        ir para Login
      </Link>
      <MessageBox userName="João">Lorem ipsum dolor sit amet</MessageBox>
      <MessageBox>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        aliquam, felis quis consectetur efficitur, ipsum neque tincidunt neque,
        eget bibendum mi risus in purus. Quisque eget scelerisque nibh. Fusce
        nec tellus orci. Curabitur a ligula vel ex dapibus scelerisque. Proin
        sapien ligula eleifend.
      </MessageBox>
      <TextInput />
    </main>
  )
}

export const getData = async () => {
  const response = await fetch('http://localhost:3333/message/count', {
    next: {
      revalidate: 30,
    },
  })
  const data = await response.json()

  return data
}
