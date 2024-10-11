// utils/useMessages.tsx
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ContextProps {
  messages: ChatMessage[]
  addMessage: (content: string) => Promise<void>
  clearMessages: () => void
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatMessage = {
        role: 'assistant',
        content: 'Hi, how can I help you today?'
      }
      setMessages([systemMessage])
    }

    if (!messages.length) {
      initializeChat()
    }
  }, [messages.length])

  const addMessage = async (content: string) => {
    if (isLoadingAnswer) return

    const userMessage: ChatMessage = { role: 'user', content }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setIsLoadingAnswer(true)

    setTimeout(() => {
      const mockResponse: ChatMessage = {
        role: 'assistant',
        content: 'This is a mock response to your message.'
      }
      setMessages((prevMessages) => [...prevMessages, mockResponse])
      setIsLoadingAnswer(false)
    }, 1000)
  }

  const clearMessages = () => {
    setMessages([])
  }

  return (
    <ChatsContext.Provider value={{ messages, addMessage, clearMessages, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const useMessages = () => useContext(ChatsContext) as ContextProps
