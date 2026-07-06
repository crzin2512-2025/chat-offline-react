import { create } from 'zustand'
import type { Message, Sender } from '../types/message'
import type { Conversation } from '../types/conversation'

type ChatStore = {
  conversations: Record<string, Conversation>
  activeConversationId: string | null
  sender: Sender
  createConversation: () => void
  selectConversation: (id: string) => void
  toggleSender: () => void
  addMessage: (conversationId: string, message: Message) => void
}

const useChatStore = create<ChatStore>((set) => ({
  conversations: {},
  activeConversationId: null,
  sender: 'user',

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

  toggleSender: () => {
    set((state) => ({
      sender: state.sender === 'user' ? 'robot' : 'user',
    }))
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
