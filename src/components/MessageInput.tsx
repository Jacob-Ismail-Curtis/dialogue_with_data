import { useState } from 'react'
import { useMessages } from 'utils/useMessages'

const MessageInput: React.FC = () => {
  const { addMessage, isLoadingAnswer } = useMessages()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoadingAnswer) return
    addMessage(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isLoadingAnswer}
        placeholder="Type your message..."
        className="flex-grow p-2 border rounded"
      />
    </form>
  )
}

export default MessageInput
