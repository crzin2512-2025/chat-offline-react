import { useState, useCallback } from 'react'
import type { Message, Sender } from '../types/message'
import MessageList from './MessageList'
import ChatInput from './ChatInput'

function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [sender, setSender] = useState<Sender>('user')

  const handleSend = useCallback((text: string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      text,
      sender,
    }
    setMessages((prev) => [...prev, message])
  }, [sender])

  function handleToggle() {
    setSender((prev) => (prev === 'user' ? 'robot' : 'user'))
  }

  return (
    <div className="flex h-dvh bg-stone-200">
      <div className="w-full max-w-2xl mx-auto flex flex-col h-full overflow-hidden">
        <MessageList messages={messages} />
        <div className="p-4">
          <ChatInput sender={sender} onToggle={handleToggle} onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default Chat
