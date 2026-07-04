import { useState } from 'react'
import type { Message } from '../types/message'
import MessageList from './MessageList'

function Chat() {
  const [messages] = useState<Message[]>([])

  return (
    <div className="flex h-dvh bg-stone-200">
      <div className="w-full max-w-2xl mx-auto flex flex-col h-full overflow-hidden">
        <MessageList messages={messages} />
        <div className="p-4">
          {/* ChatInput will go here */}
        </div>
      </div>
    </div>
  )
}

export default Chat
