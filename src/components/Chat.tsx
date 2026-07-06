import { useCallback } from 'react'
import { useChatStore } from '../stores/chatStore'
import MessageList from './MessageList'
import ChatInput from './ChatInput'

function Chat() {
  const activeConversationId = useChatStore((s) => s.activeConversationId)
  const conversations = useChatStore((s) => s.conversations)
  const sender = useChatStore((s) => s.sender)
  const addMessage = useChatStore((s) => s.addMessage)
  const toggleSender = useChatStore((s) => s.toggleSender)

  const activeMessages = activeConversationId
    ? conversations[activeConversationId]?.messages ?? []
    : []

  const handleSend = useCallback(
    (text: string) => {
      if (!activeConversationId) return
      const message = {
        id: crypto.randomUUID(),
        text,
        sender,
      }
      addMessage(activeConversationId, message)
    },
    [sender, activeConversationId, addMessage],
  )

  return (
    <div className="flex h-dvh bg-stone-200">
      <div className="w-full max-w-2xl mx-auto flex flex-col h-full overflow-hidden">
        <MessageList messages={activeMessages} />
        <div className="p-4">
          <ChatInput sender={sender} onToggle={toggleSender} onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default Chat
