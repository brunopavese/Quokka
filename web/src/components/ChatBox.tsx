'use client'

import { useState, useEffect, UIEvent } from 'react'

import axios from 'services/axios'
// import UserService from 'services/UserService'

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

  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('/messages')
        const loadedMessages: MessageType[] = response.data.data
        setMessages((prevMessages) => [...prevMessages, ...loadedMessages])
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
      // Logic to load more messages when the user reaches the end of the page
      // Call the loadMessages() function again or implement the appropriate logic
    }
  }

  return (
    <div className="flex h-full w-full justify-center overflow-y-auto pb-16">
      <section
        className="flex min-w-40 max-w-80vw flex-col justify-center self-center sm:max-w-50vw lg:max-w-33vw"
        onScroll={handleScroll}
      >
        {messages.map((message, index) => {
          return (
            <MessageBox key={index} userName={message.userId}>
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
