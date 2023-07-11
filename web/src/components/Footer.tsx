import ChatInputMessage from './ChatInputMessage'

type FooterProps = {
  onSendMessage: (message: string) => void
}

const Footer = ({ onSendMessage }: FooterProps) => {
  return (
    <footer className="flex w-full justify-center border-t border-t-zinc-600 p-4">
      <ChatInputMessage />
    </footer>
  )
}

export default Footer
