import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Umar I." className='w-[80px] h-[80px] ' />
      <ul className="list-none sm:flex hidden justify-end">
        {navLinks.map((nav, index) => (
          <a href={`${nav.id}`}>
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
              {nav.title}
            </li>
          </a>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center right-15">
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(prev => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end">
            {navLinks.map((nav, index) => (
              <a href={`${nav.id}`}>
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                  {nav.title}
                </li>
              </a>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar