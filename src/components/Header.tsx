// components/Header.tsx
import Image from 'next/image' // Import the Image component from Next.js

const Header = () => {
  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-400 p-3 flex items-center">
      <div className="flex-shrink-0 mr-4">
        <Image
          src="/img/header_logo.png"
          alt="LBG Logo"
          width={100} // Set width according to design needs
          height={50} // Set height to maintain proportion
          className="object-contain" // Maintain aspect ratio
        />
      </div>
      <h1 className="text-white text-2xl font-bold flex-grow text-center">
        LBG Dialogue with Data
      </h1>
    </div>
  )
}

export default Header
