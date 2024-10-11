// components/MessageList.tsx
import { useEffect, useRef } from 'react'
import { useMessages } from 'utils/useMessages'

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="max-w-3xl mx-auto pt-8 h-[calc(100vh-200px)] overflow-y-auto messages-list">
      {messages.map((message, i) => {
        const isUser = message.role === 'user'
        if (message.role === 'system') return null // Exclude the system message

        return (
          <div key={i} className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
              <img
                src="/img/logo.png" // Change to your logo path
                className="w-9 h-9 rounded-full"
                alt="avatar"
              />
            )}
            <div
              className={`group relative px-3 py-2 rounded-lg ${
                isUser
                  ? 'mr-2 bg-gradient-to-br from-primary-500 to-primary-400 text-white'
                  : 'ml-2 bg-primary-50 text-gray-800'
              }`}
            >
              {message.content.trim()}
            </div>
            {isUser && (
              <img
                src="/img/avatar.png" // Change to your user avatar path
                className="w-9 h-9 rounded-full cursor-pointer"
                alt="avatar"
              />
            )}
          </div>
        )
      })}
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          <img
            src="/img/logo.png" // Change to your logo path
            className="w-9 h-9 rounded-full"
            alt="avatar"
          />
          <div className="loader ml-2 p-2.5 px-4 bg-primary-50 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
    </div>
  )
}

export default MessagesList
