import type { Sender } from '../types/message'

type Props = {
  sender: Sender
  onToggle: () => void
}

function SenderToggle({ sender, onToggle }: Props) {
  const isRobot = sender === 'robot'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm transition-colors hover:bg-gray-100 whitespace-nowrap"
      title={`Enviando como ${isRobot ? 'robô' : 'usuário'}`}
    >
      <span>{isRobot ? '🤖' : '👤'}</span>
      <span className="text-gray-700">{isRobot ? 'Robô' : 'Usuário'}</span>
    </button>
  )
}

export default SenderToggle
