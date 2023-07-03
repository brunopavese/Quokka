'use client'

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

import SendButton from './SendButton'

export default function TextInput() {
  const [inputValue, setInputValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    textareaRef.current ? (textareaRef.current.style.height = '56px') : ''
  }, [textareaRef])

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
    adjustTextareaHeight()
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Valor do input:', inputValue)
    setInputValue('')
    adjustTextareaHeight()
  }

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '3rem'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end justify-center space-x-2"
    >
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={handleChange}
        maxLength={300}
        placeholder="Digite sua mensagem..."
        className="w-80vw resize-none overflow-y-hidden whitespace-normal rounded-md bg-zinc-700 p-4 text-base font-normal text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-0 sm:w-50vw lg:w-33vw"
      />
      <SendButton isValid={!!inputValue} />
    </form>
  )
}
