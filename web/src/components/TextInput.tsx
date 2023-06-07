'use client';

import { useEffect, useRef, useState } from 'react';

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
      className="flex items-center justify-center space-x-2"
    >
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={handleChange}
        maxLength={300}
        placeholder="Digite sua mensagem agradável..."
        className="bg-zinc-700 w-96 font-normal p-4 text-l text-slate-100 placeholder-gray-400 rounded-md resize-none focus:outline-none focus:ring-0 overflow-y-hidden whitespace-normal"
      />
      <button
        type="submit"
        className="px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
}
