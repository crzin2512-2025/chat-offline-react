import { create } from 'zustand'
import type { Message, Sender } from '../types/message'
import type { Conversation } from '../types/conversation'

type ChatStore = {
  conversations: Record<string, Conversation>
  activeConversationId: string | null
  sender: Sender
  sidebarOpen: boolean
  createConversation: () => void
  selectConversation: (id: string) => void
  deleteConversation: (id: string) => void
  toggleSender: () => void
  toggleSidebar: () => void
  addMessage: (conversationId: string, message: Message) => void
}

const useChatStore = create<ChatStore>((set) => ({
  conversations: {},
  activeConversationId: null,
  sender: 'user',
  sidebarOpen: false,

  createConversation: () => {
    const id = crypto.randomUUID()
    set((state) => ({
      conversations: {
        ...state.conversations,
        [id]: { id, messages: [] },
      },
      activeConversationId: id,
    }))
  },

  selectConversation: (id: string) => {
    set({ activeConversationId: id })
  },

  deleteConversation: (id: string) => {
    set((state) => {
      const { [id]: _, ...rest } = state.conversations
      const isActive = state.activeConversationId === id
      return {
        conversations: rest,
        activeConversationId: isActive ? null : state.activeConversationId,
      }
    })
  },

  toggleSender: () => {
    set((state) => ({
      sender: state.sender === 'user' ? 'robot' : 'user',
    }))
  },

  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }))
  },

  addMessage: (conversationId: string, message: Message) => {
    set((state) => {
      const conversation = state.conversations[conversationId]
      if (!conversation) return state
      return {
        conversations: {
          ...state.conversations,
          [conversationId]: {
            ...conversation,
            messages: [...conversation.messages, message],
          },
        },
      }
    })
  },
}))

export { useChatStore }
