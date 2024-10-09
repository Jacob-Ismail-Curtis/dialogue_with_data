import { useToast } from '@apideck/components'
import { ChatCompletionRequestMessage } from 'openai'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ContextProps {
  messages: ChatCompletionRequestMessage[]
  addMessage: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast()
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
    // Prevent sending new messages while loading
    if (isLoadingAnswer) return

    const userMessage: ChatCompletionRequestMessage = {
      role: 'user',
      content
    }

    // Update state with the user's message
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setIsLoadingAnswer(true)

    // Mock chatbot response with a 1-second delay
    setTimeout(() => {
      const mockResponse: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'This is a mock response to your message.'
      }

      setMessages((prevMessages) => [...prevMessages, mockResponse])
      setIsLoadingAnswer(false)
    }, 1000)
  }

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps
}
