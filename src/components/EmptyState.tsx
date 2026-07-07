function EmptyState() {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="text-center space-y-2">
        <h2 className="text-sm font-medium text-stone-400">
          Nenhuma conversa selecionada
        </h2>
        <p className="text-xs text-stone-300">
          Crie ou selecione uma conversa na sidebar
        </p>
      </div>
    </div>
  )
}

export default EmptyState
