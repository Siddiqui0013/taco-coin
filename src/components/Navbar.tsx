import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import Logo from "../assets/Footer.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "Roadmap", id: "roadmap" },
    { name: "FAQ", id: "faq" },
  ];

  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const ScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  return (
    <nav className="md:p-0 py-8">
      <div className="px-12 flex justify-between mx-auto relative">
        <div className="hidden md:block">
          <img src={Logo} width={90} alt="" />
        </div>
        <ul className="hidden md:flex justify-around w-[60%] mx-auto items-center text-2xl">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => ScrollTo(item.id)}
              className="cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>

        <div className={`md:hidden absolute top-0 right-0 flex justify-end z-[51] transition-transform duration-300 ${!show && 'transform -translate-y-full'}`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 fixed hover:text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <RxCross1 size={32} />
            ) : (
              <RxHamburgerMenu size={32} />
            )}
          </button>
        </div>

        <div 
          className={`md:hidden fixed inset-0 bg-[#FFA726] z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        >
          <ul className="pt-4 pb-3">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => ScrollTo(item.id)}
                className="text-2xl py-3 text-center cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="flex gap-12 mb-2 items-center">
            <FaTelegramPlane size={44} className="bg-white p-1 border-black border rounded-full shadow-lg" />
            <FaDiscord size={44} className="bg-white p-1 border-black border rounded-full shadow-lg" />
            <FaTwitter size={44} className="bg-white p-1 border-black border rounded-full shadow-lg" />
          </div>
        </div>

        <div className="links hidden md:flex gap-2 items-center">
          <FaTelegramPlane size={32} className="bg-white p-1 border-black border rounded-full shadow-lg" />
          <FaDiscord size={32} className="bg-white p-1 border-black border rounded-full shadow-lg" />
          <FaTwitter size={32} className="bg-white p-1 border-black border rounded-full shadow-lg" />
        </div>
      </div>
    </nav>
  );
}