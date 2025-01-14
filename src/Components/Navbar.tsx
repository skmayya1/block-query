import { SiSolana } from "react-icons/si";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='absolute h-[8vh] w-full px-20 flex items-center justify-end'>
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="border px-5 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          <SiSolana size={20} />
          <span>Solana</span>
          <svg 
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-gray-900 border border-gray-700">
            <div className="py-1">
              <div className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-200">
                <div className="flex items-center gap-2">
                  <SiSolana size={16} />
                  Solana
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar