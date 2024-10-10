import { ChatCompletionRequestMessage } from 'openai'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ContextProps {
  messages: ChatCompletionRequestMessage[]
  addMessage: (content: string) => Promise<void>
  clearMessages: () => void
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content: 'You are ChatGPT, a large language model trained by OpenAI.'
      }
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'Hi, How can I help you today?'
      }
      setMessages([systemMessage, welcomeMessage])
    }

    if (!messages.length) {
      initializeChat()
    }
  }, [messages.length])

  const addMessage = async (content: string) => {
    if (isLoadingAnswer) return

    const userMessage: ChatCompletionRequestMessage = { role: 'user', content }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setIsLoadingAnswer(true)

    setTimeout(() => {
      const mockResponse: ChatCompletionRequestMessage = {
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
