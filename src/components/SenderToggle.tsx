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
      className="flex items-center gap-1.5 rounded-lg border border-stone-200 bg-stone-50 px-2 min-[360px]:px-3 py-2 text-sm transition-colors hover:bg-stone-100 whitespace-nowrap disabled:cursor-not-allowed"
      title={`Enviando como ${isRobot ? 'robô' : 'usuário'}`}
    >
      <span>{isRobot ? '🤖' : '👤'}</span>
      <span className="text-stone-600 hidden min-[360px]:inline">{isRobot ? 'Robô' : 'Usuário'}</span>
    </button>
  )
}

export default SenderToggle
