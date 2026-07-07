import type { Sender } from '../types/message'

type Props = {
  sender: Sender
  onToggle: () => void
  disabled?: boolean
}

function SenderToggle({ sender, onToggle, disabled = false }: Props) {
  const isRobot = sender === 'robot'

  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm transition-colors hover:bg-gray-100 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50"
      title={`Enviando como ${isRobot ? 'robô' : 'usuário'}`}
    >
      <span>{isRobot ? '🤖' : '👤'}</span>
      <span className="text-gray-700">{isRobot ? 'Robô' : 'Usuário'}</span>
    </button>
  )
}

export default SenderToggle
