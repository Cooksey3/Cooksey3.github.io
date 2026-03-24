import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ title, navLinks }) => {
  return (
    <header className="flex justify-center w-full bg-black h-[70px]">
      <div className='flex justify-between items-center w-full max-w-7xl px-16'>
        <h1 className="text-4xl tracking-wide font-poppins text-gray-300">
          {title}
        </h1>
        <section className="">
          <nav className="flex gap-4 shadow-lg rounded-lg overflow-hidden">
              <Link
                className="block text-gray-300 font-bold no-underline hover:text-[#F0F8FF] transition-colors duration-200"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="block text-gray-300 font-bold no-underline hover:text-[#F0F8FF] transition-colors duration-200"
                to={"/projects"}
              >
                Projects
              </Link>
              <Link
                className="block text-gray-300 font-bold no-underline hover:text-[#F0F8FF] transition-colors duration-200"
                to={"/resumé"}
              >
                Resume
              </Link>
          </nav>
        </section>
      </div>
    </header>
  )
}

export default Header
