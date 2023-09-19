import React from 'react'
import './Header.css'
import { FaBars } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='flex items-center  justify-between  p-2 bg-indigo-900 text-white '>
      <h1 className='text-red-500'><span className="text-yellow-500 mr-1">My</span>Portfolio</h1>
      <div>
        <ul className=' hidden md:flex justify-between '>
            <li className='ml-4 font-bold'>HOME</li>
            <li className='ml-4 font-bold'>ABOUT US</li>
            <li className='ml-4 font-bold'>MY SKILLS</li>
            <li className='ml-4 font-bold'>PROJECTS</li>
        </ul>
      </div>
      <button className=' bg-white rounded-md text-black p-1 hidden md:block'>Contact Me</button>
      <button className='md:hidden'><FaBars/></button>
    </header>
  )
}
