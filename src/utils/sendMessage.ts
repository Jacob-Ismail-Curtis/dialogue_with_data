/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChatCompletionRequestMessage } from 'openai'

export const sendMessage = async (messages: ChatCompletionRequestMessage[]) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reply: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'This is a mock response to your message.'
      }
      resolve({ data: { choices: [{ message: reply }] } })
    }, 1000) // Simulate a 1-second delay
  })
}
