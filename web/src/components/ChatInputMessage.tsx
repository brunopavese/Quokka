'use client'

import { KeyboardEvent, useEffect, useRef, useState } from 'react'

import SendButton from './SendButton'

type ChatInputMessageProps = {
  onSend?: (message: string) => void
}

export default function ChatInputMessage({ onSend }: ChatInputMessageProps) {
  const [inputValue, setInputValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px'
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = scrollHeight + 'px'
    }
  }, [inputValue, textareaRef])

  const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code.toLowerCase() === 'enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      console.log(inputValue)
      // onSend(inputValue)
      setInputValue('')
    }
  }

  const inputFilter = (text: string) => {
    return text
      .replace(/^\n+/, '')
      .replace(/[\r\n]{3,}/g, '\n\n')
      .replace(/[^\S\r\n]+/g, ' ')
  }

  return (
    <div className="flex w-80vw items-end justify-center space-x-2 self-center sm:w-50vw lg:w-33vw">
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={(event) => setInputValue(inputFilter(event.target.value))}
        onKeyUp={handleTextKeyUp}
        maxLength={300}
        placeholder="Send a message..."
        className="max-h-48 w-full resize-none overflow-y-auto whitespace-normal rounded-md bg-zinc-700 p-4 text-base font-normal text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-0"
      />
      <SendButton isValid={!!inputValue.trim().length} onClick={handleSubmit} />
    </div>
  )
}
