function Chat() {
  return (
    <div className="flex h-dvh bg-stone-200">
      <div className="w-full max-w-2xl mx-auto flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          {/* MessageList will go here */}
        </div>
        <div className="p-4">
          {/* ChatInput will go here */}
        </div>
      </div>
    </div>
  )
}

export default Chat
