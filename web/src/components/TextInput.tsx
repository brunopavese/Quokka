'use client';

import { useEffect, useRef, useState } from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react';

export function TextInput() {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current ? (textareaRef.current.style.height = '56px') : '';
  }, [textareaRef]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    adjustTextareaHeight();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para processar o valor do input
    console.log('Valor do input:', inputValue);
    setInputValue('');
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '3rem';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

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
        className="bg-zinc-700 max-w-96 sm:w-33vw font-normal p-4 text-l text-slate-100 placeholder-gray-400 rounded-md resize-none focus:outline-none focus:ring-0 overflow-y-hidden whitespace-normal"
      />
      <button
        type="submit"
        className="flex p-2 w-14 h-14 justify-center items-center text-3xl font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
      >
        <PaperPlaneTilt className="" />
      </button>
    </form>
  );
}
