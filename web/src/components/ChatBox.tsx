'use client'

import { useState, useEffect, UIEvent } from 'react'

import axios from 'services/axios'
import UserService from 'services/UserService'
import { User } from 'utils/types'

import MessageBox from './MessageBox'

type MessageType = {
  id: string
  text: string
  userId: string
  createdAt: string
}

const ChatBox = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [userDatas, setUserDatas] = useState<User[]>([])

  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('/messages')
        const loadedMessages: MessageType[] = response.data.data
        setMessages((prevMessages) => [...prevMessages, ...loadedMessages])

        // Para cada mensagem, busca os dados do usuário
        const userPromises = loadedMessages.map((message) =>
          UserService.getUserById(message.userId),
        )
        const userDataArray = await Promise.all(userPromises)
        setUserDatas((prevUserDatas) => [...prevUserDatas, ...userDataArray])
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadMessages()
  }, [])

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget
    if (scrollHeight - scrollTop === clientHeight) {
      // Lógica para carregar mais mensagens quando o usuário chegar ao final da página
      // Chame a função loadMessages() novamente ou implemente a lógica apropriada
    }
  }

  return (
    <div className="flex h-full w-full justify-center overflow-y-auto pb-16">
      <section
        className="flex min-w-40 max-w-80vw flex-col justify-center self-center sm:max-w-50vw lg:max-w-33vw"
        onScroll={handleScroll}
      >
        {messages.map((message, index) => {
          const userData = userDatas[index] // Pega os dados do usuário correspondentes à mensagem
          console.log(userData)
          return (
            <MessageBox key={index} user={userData}>
              {message.text}
            </MessageBox>
          )
        })}
        {isLoading && (
          <div className="flex w-full">Carregando mensagens...</div>
        )}
      </section>
    </div>
  )
}

export default ChatBox
