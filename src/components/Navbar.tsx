import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'Home',
    'About',
    'Roadmap',
    'Tokenomics',
    'FAQ'
  ];

  return (
    <nav className="px-8 md:py-12 py-8">
      <div className="w-full mx-auto relative">
        <ul className="hidden md:flex justify-between w-[70%] mx-auto items-center text-2xl">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="md:hidden absolute top-0 right-0 flex justify-end z-[999]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <RxCross1 size={32} />
            ) : (
              <RxHamburgerMenu size={32} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden top-0 left-0 bg-[#FFA726] w-[100%] fixed z-50 flex flex-col items-center justify-center">
            <ul className="pt-4 pb-3">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="text-2xl py-3 text-center cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}