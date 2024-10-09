// components/Header.tsx
import Image from 'next/image'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-br from-primary-500 to-primary-400 p-3 flex items-center z-30">
      <div className="flex-shrink-0 mr-4">
        <Image
          src="/img/header_logo.png"
          alt="LBG Logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </div>
      <h1 className="text-white text-2xl font-bold flex-grow text-center">
        LBG Dialogue with Data
      </h1>
    </div>
  )
}

export default Header
