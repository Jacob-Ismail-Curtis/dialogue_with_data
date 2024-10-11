// utils/useMessages.tsx
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

// Define the structure of a chat message
interface ChatMessage {
  role: 'user' | 'assistant' // Role can be either user or assistant
  content: string // Content of the message
}

// Define the structure of the context props
interface ContextProps {
  messages: ChatMessage[] // List of chat messages
  addMessage: (content: string) => Promise<void> // Function to add a message
  clearMessages: () => void // Function to clear messages
  isLoadingAnswer: boolean // Loading state
}

// Create a context for chat messages
const ChatsContext = createContext<ContextProps | undefined>(undefined)

/**
 * MessagesProvider component to manage chat messages and state
 * @param {ReactNode} children - The child components
 */
export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]) // State for messages
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false) // Loading state

  // Initialize chat with a welcome message
  useEffect(() => {
    if (!messages.length) {
      const initialMessage: ChatMessage = {
        role: 'assistant',
        content: 'Hi, how can I help you today?'
      }
      setMessages([initialMessage])
    }
  }, [messages.length])

  // Function to add a user message and simulate a response
  const addMessage = async (content: string) => {
    if (isLoadingAnswer) return // Prevent sending new messages while loading

    const userMessage: ChatMessage = { role: 'user', content }
    setMessages((prevMessages) => [...prevMessages, userMessage]) // Add user message
    setIsLoadingAnswer(true) // Set loading state

    // Simulate assistant response
    setTimeout(() => {
      const mockResponse: ChatMessage = {
        role: 'assistant',
        content: 'This is a mock response to your message.'
      }
      setMessages((prevMessages) => [...prevMessages, mockResponse]) // Add assistant message
      setIsLoadingAnswer(false) // Reset loading state
    }, 1000)
  }

  // Function to clear all messages
  const clearMessages = () => {
    setMessages([]) // Clear messages
  }

  // Provide the context value to child components
  return (
    <ChatsContext.Provider value={{ messages, addMessage, clearMessages, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

// Custom hook to use the chat context
export const useMessages = (): ContextProps => {
  const context = useContext(ChatsContext)
  if (!context) {
    throw new Error('useMessages must be used within a MessagesProvider')
  }
  return context // Return the context value
}
