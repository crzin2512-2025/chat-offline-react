function EmptyState() {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="text-center space-y-3">
        <div className="text-4xl">💬</div>
        <h2 className="text-lg font-medium text-stone-600">
          Nenhuma conversa selecionada
        </h2>
        <p className="text-sm text-stone-400 max-w-xs mx-auto">
          Crie uma nova conversa ou selecione uma existente na sidebar para começar.
        </p>
      </div>
    </div>
  )
}

export default EmptyState
