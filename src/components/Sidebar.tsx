import { useChatStore } from '../stores/chatStore'

function Sidebar() {
  const sidebarOpen = useChatStore((s) => s.sidebarOpen)
  const toggleSidebar = useChatStore((s) => s.toggleSidebar)

  return (
    <>
      {/* Overlay for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-stone-900 text-stone-100
          flex flex-col transition-transform duration-200
          lg:relative lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 border-b border-stone-700 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide">Conversas</span>
          <button
            type="button"
            onClick={toggleSidebar}
            className="lg:hidden text-stone-400 hover:text-stone-100 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <p className="text-xs text-stone-500 italic">
            Nenhuma conversa ainda
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
