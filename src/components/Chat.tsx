import { useCallback } from 'react'
import { useChatStore } from '../stores/chatStore'
import Sidebar from './Sidebar'
import EmptyState from './EmptyState'
import MessageList from './MessageList'
import ChatInput from './ChatInput'

function Chat() {
  const activeConversationId = useChatStore((s) => s.activeConversationId)
  const conversations = useChatStore((s) => s.conversations)
  const sender = useChatStore((s) => s.sender)
  const addMessage = useChatStore((s) => s.addMessage)
  const toggleSender = useChatStore((s) => s.toggleSender)
  const toggleSidebar = useChatStore((s) => s.toggleSidebar)

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
      <Sidebar />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header with hamburger */}
        <header className="flex items-center gap-3 px-4 py-3 bg-white border-b border-stone-200">
          <button
            type="button"
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg hover:bg-stone-100 transition-colors text-stone-600"
            aria-label="Abrir sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm font-medium text-stone-500">
            {activeConversationId ? `Conversa ${activeConversationId.slice(0, 8)}` : 'Chat Offline'}
          </span>
        </header>

        {/* Content area */}
        {activeConversationId ? (
          <>
            <MessageList key={activeConversationId} messages={activeMessages} />
            <div className="p-4">
              <ChatInput sender={sender} onToggle={toggleSender} onSend={handleSend} />
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}

export default Chat
