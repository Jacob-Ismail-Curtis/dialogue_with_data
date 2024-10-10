import { FaTrash } from 'react-icons/fa'
import { useMessages } from 'utils/useMessages'

const Sidebar = () => {
  const { clearMessages } = useMessages() // Access the clearMessages function

  return (
    <div className="w-52 bg-primary-50 h-screen p-5 text-white fixed top-0 left-0 z-20 flex flex-col">
      <h2 className="text-xl font-bold mt-16 text-center text-primary-800">Useful Links</h2>
      <div className="mt-auto items-center">
        <button
          onClick={clearMessages}
          className="flex items-center w-full px-4 py-3 bg-gradient-to-br from-primary-500 to-primary-400 rounded-md mt-8 text-white"
        >
          <FaTrash className="mr-2" />
          Clear Chat
        </button>
      </div>
    </div>
  )
}

export default Sidebar
