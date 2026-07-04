import { useState, useCallback } from 'react'
import type { Message } from '../types/message'
import MessageList from './MessageList'
import ChatInput from './ChatInput'

function Chat() {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSend = useCallback((text: string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      text,
      sender: 'user',
    }
    setMessages((prev) => [...prev, message])
  }, [])

  return (
    <div className="flex h-dvh bg-stone-200">
      <div className="w-full max-w-2xl mx-auto flex flex-col h-full overflow-hidden">
        <MessageList messages={messages} />
        <div className="p-4">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default Chat
