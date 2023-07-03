'use client'

import { FC, ReactNode, useEffect } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const LoginForm: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden' // Impede o scroll do body quando o modal estiver aberto
    } else {
      document.body.style.overflow = 'auto' // Restaura o scroll do body quando o modal estiver fechado
    }

    return () => {
      document.body.style.overflow = 'auto' // Restaura o scroll do body ao desmontar o modal
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-4 shadow-lg">{children}</div>
    </div>
  )
}

export default LoginForm
