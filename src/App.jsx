import './App.css';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const STATS = [
    { value: "500+", label: "Products" },
    { value: "25+", label: "Categories" },
    { value: "1M+", label: "Customers" }
  ];

  const SOCIAL_LINKS = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Phone, href: "#", label: "Phone" }
  ];

  return (
    <>
      <div className='background w-full'>
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
          <div className="max-w-7xl mx-auto flex items-center px-4 justify-between">
            <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider">BHARANI</h1>
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-4 md:gap-8">
              <a href="#" className="text-lg md:text-xl text-white">Shop</a>
              <a href="#" className="text-lg md:text-xl text-white">Blog</a>
              <a href="#" className="text-lg md:text-xl text-white">About</a>
              <a href="#" className="text-lg md:text-xl text-white">Contact us</a>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white text-2xl"
            >
               {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} relative bg-gray-800 text-white p-4 md:p-6 rounded-3xl  top-0 left-0 right-0 mt-16`}>
          <a href="#" className="block text-lg md:text-xl py-2">Shop</a>
          <a href="#" className="block text-lg md:text-xl py-2">Blog</a>
          <a href="#" className="block text-lg md:text-xl py-2">About</a>
          <a href="#" className="block text-lg md:text-xl py-2">Contact us</a>
        </div>

        {/* Hero Section */}
        <div className="relative h-[70vh] flex items-center justify-center md:justify-start md:ml-[100px]">
          <div className="z-10 text-white text-center md:text-left px-4 py-6">
            <h1 className="text-3xl md:text-5xl font-bold">Comfort meets style</h1>
            <p className="text-base md:text-lg mt-4 md:mt-7">Explore our wide variety of modern furniture to create your ideal living space</p>
            <button className="bg-black text-white px-4 md:px-6 py-2 rounded-xl mt-4 md:mt-6">Explorer</button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row gap-4 text-white text-center px-4 md:ml-[100px]">
          {STATS.map(({ value, label }) => (
            <div key={label} className="w-full md:w-[200px] h-[100px] bg-gray-700 opacity-50 p-4 md:p-6 rounded-3xl">
              <div className="z-10 text-center text-gray-300">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</p>
                <p className="text-gray-300">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6 bg-gray-700 shadow-lg p-3 md:p-4 rounded-3xl opacity-50">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} className="text-white hover:text-blue-600 transition-all">
              <Icon size={20} className="md:w-6 md:h-6" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;