import React, { useEffect, useState } from 'react'
import './Header.css'
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({setIsModalOpen,isModalOpen}) {

const navigate = useNavigate()


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // navigate("/navigation")
};

  return (
    <header className='flex items-center  justify-between  p-6 bg-indigo-900 text-white bounce-in-top '>
      <h1 className='text-red-400 text-4xl font-bold'><span className="text-yellow-300 mr-1 ">My</span>Portfolio</h1>
      <div>
        <ul className=' hidden md:flex justify-between cursor-pointer  '>
          <li className='ml-8  font-bold hover:text-yellow-300'>
            <Link to="/"> Home</Link>
          </li>
          <li className='ml-8  font-bold  hover:text-yellow-300'>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li className='ml-8  font-bold  hover:text-yellow-300'>
            <Link to="/myskills"> My skills</Link>
          </li>
          <li className='ml-8  font-bold  hover:text-yellow-300'>
            <Link to="/myproject"> My Project</Link>
          </li>
        </ul>
      </div>
      <button className=' bg-white rounded-md text-black p-1 hidden hover:bg-yellow-400 md:block'>
        <Link to="/contactme">Contact Me</Link>
      </button>
      <button className='md:hidden' onClick={toggleModal}>
          <FaBars/>
      </button>
    </header>
  )
}
