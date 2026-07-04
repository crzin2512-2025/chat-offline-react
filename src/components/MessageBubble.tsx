import type { Message } from '../types/message'

type Props = {
  message: Message
}

function MessageBubble({ message }: Props) {
  const isUser = message.sender === 'user'
  const isRobot = message.sender === 'robot'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] rounded-lg  ${isRobot ? 'bg-purple-200' : 'bg-white'} px-4 py-2 shadow-sm`}>
        <p className="text-sm text-gray-800 whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  )
}

export default MessageBubble
