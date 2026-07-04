import { useEffect, useRef } from 'react'
import type { Message } from '../types/message'
import MessageBubble from './MessageBubble'

type Props = {
  messages: Message[]
}

function MessageList({ messages }: Props) {
  const endRef = useRef<HTMLDivElement>(null)

  const prevLengthRef = useRef(messages.length)

  useEffect(() => {
    if (messages.length > prevLengthRef.current) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    prevLengthRef.current = messages.length
  }, [messages])

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="text-gray-500 text-sm italic">
          Nenhuma mensagem ainda. Envie a primeira!
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 pb-20 space-y-2">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={endRef} />
    </div>
  )
}

export default MessageList
