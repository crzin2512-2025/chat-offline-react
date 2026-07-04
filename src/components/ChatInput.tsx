import { useRef, type ChangeEvent, type KeyboardEvent } from 'react'
import type { Sender } from '../types/message'
import SenderToggle from './SenderToggle'

type Props = {
  sender: Sender
  onToggle: () => void
  onSend: (text: string) => void
}

function ChatInput({ sender, onToggle, onSend }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function adjustHeight() {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 150)}px`
  }

  function handleChange(_e: ChangeEvent<HTMLTextAreaElement>) {
    adjustHeight()
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  function send() {
    const el = textareaRef.current
    if (!el) return
    const text = el.value.trim()
    if (!text) return
    onSend(text)
    el.value = ''
    el.style.height = 'auto'
  }

  const isRobot = sender === 'robot'

  return (
    <div className={`bg-white rounded-lg shadow-sm p-3 flex items-end gap-2 border-2 transition-colors ${isRobot ? 'border-purple-500' : 'border-transparent'}`}>
      <SenderToggle sender={sender} onToggle={onToggle} />
      <textarea
        ref={textareaRef}
        rows={1}
        placeholder="Digite uma mensagem..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="flex-1 resize-none border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 max-h-37.5 overflow-y-auto"
      />
      <button
        type="button"
        onClick={send}
        className="bg-stone-700 hover:bg-stone-800 disabled:bg-stone-300 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed"
      >
        Enviar
      </button>
    </div>
  )
}

export default ChatInput
