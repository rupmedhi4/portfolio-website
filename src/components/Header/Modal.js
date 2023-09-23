import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Modal({ isModalOpen, setIsModalOpen }) {

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup: Re-enable body scroll when the component is unmounted
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isModalOpen]);
    
    const handleCloseModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return ReactDOM.createPortal(
        <div>
            <div className='fixed inset-0 flex justify-end  bg-black bg-opacity-50 scale-up-hor-right '>

                <div className='bg-slate-700 p-14 rounded-lg flex flex-row mt-20 '>

                    <ul className='mr-8 m-8 '>
                        <li className='mb-4'>
                            <Link to="/" className='font-bold hover:text-yellow-300 text-white' onClick={handleCloseModal}>
                                Home
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link to="/aboutme" className='font-bold hover:text-yellow-300 text-white'onClick={handleCloseModal} >
                                About Me
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link to="/myskills" className='font-bold hover:text-yellow-300 text-white'onClick={handleCloseModal} >
                                My Skills
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link to="/myproject" className='font-bold hover:text-yellow-300 text-white'onClick={handleCloseModal} >
                                My Project
                            </Link>
                        </li>
                        <li>
                            <Link to="/contactme" className='text-white font-bold bg-blue-500 rounded-md p-2 hover:bg-yellow-300 hover:text-black' onClick={handleCloseModal}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <button className='text-white bg-blue-500 rounded-md p-2 font-bold hover:bg-yellow-300 hover:text-black absolute top-20 right-0 m-4' onClick={handleCloseModal}  > Close</button>
            
                </div>
                <div>

                </div>
            </div>

        </div>,
        document.getElementById('myModalDiv')
    );
}
