import type { Message } from '../types/message'

type Props = {
  message: Message
}

function MessageBubble({ message }: Props) {
  const isUser = message.sender === 'user'
  const isRobot = message.sender === 'robot'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] rounded-xl px-4 py-2 ${isRobot ? 'bg-stone-700 text-stone-100' : 'bg-white text-stone-800'}`}>
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  )
}

export default MessageBubble
