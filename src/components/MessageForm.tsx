// components/MessageForm.tsx
import { FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import { useMessages } from 'utils/useMessages'

const MessageForm = () => {
  const [content, setContent] = useState('')
  const { addMessage } = useMessages()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    addMessage(content)
    setContent('')
  }

  return (
    <form className="relative mx-auto max-w-3xl rounded-t-xl" onSubmit={handleSubmit}>
      <div className="border-gray-200 h-[130px] rounded-t-xl backdrop-blur border-t border-l border-r border-gray-500/10 dark:border-gray-50/[0.06] bg-white p-5">
        <label htmlFor="content" className="sr-only">
          Enter your query here...
        </label>
        <textarea
          name="content"
          placeholder="Enter your query here..."
          rows={3}
          value={content}
          autoFocus
          className="w-full p-3 text-gray-900 border-0 ring-1 dark:ring-0 ring-gray-300/40 focus:ring-gray-300/80 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800/80 backdrop-blur shadow-none"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        />
        <div className="absolute right-8 bottom-10">
          <button type="submit" className="p-2 bg-primary-500 rounded text-white">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </form>
  )
}

export default MessageForm
