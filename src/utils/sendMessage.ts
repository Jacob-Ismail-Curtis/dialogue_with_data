interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Sends a message to the mock OpenAI API and receives a response.
 * @param messages - An array of ChatMessage objects representing the conversation history.
 * @returns A promise that resolves with the mock response after a delay.
 */
export const sendMessage = async (
  messages: ChatMessage[]
): Promise<{ data: { choices: Array<{ message: ChatMessage }> } }> => {
  return new Promise((resolve) => {
    // Simulate a network delay
    setTimeout(() => {
      const reply: ChatMessage = {
        role: 'assistant',
        content: 'This is a mock response to your message.',
      };
      // Resolve with a structured response
      resolve({ data: { choices: [{ message: reply }] } });
    }, 1000); // Simulate a 1-second delay
  });
};
