import ChatBox from 'components/ChatBox'
import Footer from 'components/Footer'
// import MessageBox from 'components/MessageBox'

export default async function Home() {
  // const data = await getData()

  const handleSendMessage = () => {}
  return (
    <main className="flex h-0 min-h-screen flex-col bg-zinc-800 p-0">
      {/* <h1 className="text-2xl font-bold text-slate-100">Contagem:{data}</h1> */}
      {/* <div className="flex h-full flex-col items-center justify-between bg-zinc-800 px-8 py-20 md:py-8"> */}
      <ChatBox />
      {/* </div> */}
      <Footer onSendMessage={handleSendMessage} />
    </main>
  )
}

export const getData = async () => {
  const response = await fetch('http://localhost:3333/users/count', {
    next: {
      revalidate: 30,
    },
  })
  const data = await response.json()

  return data
}
