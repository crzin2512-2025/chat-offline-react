import { useChatStore } from '../stores/chatStore'

function Sidebar() {
  const sidebarOpen = useChatStore((s) => s.sidebarOpen)
  const toggleSidebar = useChatStore((s) => s.toggleSidebar)
  const conversations = useChatStore((s) => s.conversations)
  const activeConversationId = useChatStore((s) => s.activeConversationId)
  const createConversation = useChatStore((s) => s.createConversation)
  const selectConversation = useChatStore((s) => s.selectConversation)
  const deleteConversation = useChatStore((s) => s.deleteConversation)

  const conversationList = Object.values(conversations)

  function handleSelect(id: string) {
    selectConversation(id)
    toggleSidebar()
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-stone-900 text-stone-100
          flex flex-col transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="px-4 py-3 border-b border-stone-800 flex items-center justify-between">
          <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Conversas</span>
          <button
            type="button"
            onClick={toggleSidebar}
            className="text-stone-500 hover:text-stone-300 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-3">
          <button
            type="button"
            onClick={createConversation}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-stone-700 px-3 py-2 text-xs text-stone-400 hover:bg-stone-800 hover:text-stone-200 transition-colors"
          >
            <span>＋</span>
            <span>Nova conversa</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">
          {conversationList.length === 0 ? (
            <p className="text-xs text-stone-600 px-1">
              Nenhuma conversa ainda
            </p>
          ) : (
            conversationList.map((conv) => (
              <div
                key={conv.id}
                className={`group flex items-center rounded-lg transition-colors ${
                  conv.id === activeConversationId
                    ? 'bg-stone-800 text-stone-100'
                    : 'text-stone-400 hover:bg-stone-800/50 hover:text-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleSelect(conv.id)}
                  className="flex-1 text-left px-3 py-2 text-xs truncate"
                >
                  Conversa {conv.id.slice(0, 8)}
                </button>
                <button
                  type="button"
                  onClick={() => deleteConversation(conv.id)}
                  className="px-2 py-2 text-stone-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                  title="Excluir conversa"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
