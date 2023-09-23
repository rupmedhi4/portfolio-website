import React from 'react'
import '../Home/Home.css'
import './Myproject.css'
import { Link } from 'react-router-dom'

export default function MyProject() {
    return (
        <div className='bg-slate-800 min-h-screen slide-in-bck-bottom '>
            <div className=' text-center py-10 '>
                <h1 className='text-red-500 font-bold text-3xl '><span className='text-yellow-200 font-bold text-3xl mr-2'>My</span>Project</h1>
                <p className='text-white mt-4 text-xl font-bold'>Creating awesome websites with React, Firebase, and Redux for a seamless and engaging user experience!</p>
            </div>

            <div className='flex justify-center gap-8 mt-8 m-4 text-white tracking-in-contract-bck' >
                <div className="w-[400px] h-auto ">
                    <img
                        src="./img/expense_tracker.jpg"
                        className="h-[200px] w-full rounded-md object-cover"
                    />
                    <div className="p-4 flex flex-col items-center bg-white text-black">
                        <h1 className="text-lg font-semibold text-center">Expense Tracker</h1>
                        {/* <p className="mt-3 text-sm text-blue-800 text-center font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                        </p> */}
                        <button className='border-2 border-blue-300 p-1 mt-3 bg-yellow-800 text-white font-semibold rounded-md hover:bg-blue-800 hover:text-black'>
                            <Link to="https://complete-expense-tracker.vercel.app/" target="_blank">
                                Live Demo
                            </Link>
                        </button>

                    </div>
                </div>
                <div className="w-[400px] h-auto tracking-in-contract-bck">
                    <img
                        src='./img/ecommerce.jpg'
                        alt="Laptop"
                        className="h-[200px] w-full rounded-md object-cover"
                    />
                    <div className="p-4 flex flex-col items-center bg-white text-black">
                        <h1 className="text-lg font-semibold text-center">Ecommerce Site</h1>
                        {/* <p className="mt-3 text-sm text-blue-800 text-center font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                        </p> */}
                        <button className='border-2 border-blue-300 p-1 mt-3 bg-yellow-800 text-white font-semibold rounded-md hover:bg-blue-800 hover:text-black'>
                            <Link to="https://ecommerce-c6eo.vercel.app/" target="_blank">
                                Live Demo
                            </Link>
                        </button>
                    </div>
                </div>

            </div>
            <div className='flex justify-center gap-8 mt-8 m-4 text-white'>
                <div className="w-[400px] h-auto ">
                    <img
                        src="./img/videohub.jpg"
                        alt="Laptop"
                        className="h-[200px] w-full rounded-md object-cover"
                    />
                    <div className="p-4 flex flex-col items-center bg-white text-black">
                        <h1 className="text-lg font-semibold text-center">Video Hub</h1>
                        <button className='border-2 border-blue-300 p-1 mt-3 bg-yellow-800 text-white font-semibold rounded-md hover:bg-blue-800 hover:text-black'>
                            <Link to="https://reactvideoapp-beta.vercel.app/" target="_blank">
                                Live Demo
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="w-[400px] h-auto ">
                    <img
                        src="./img/nextapp.jpg"
                        alt="Laptop"
                        className="h-[200px] w-full rounded-md object-cover"
                    />
                    <div className="p-4 flex flex-col items-center bg-white text-black">
                        <h1 className="text-lg font-semibold text-center">Netflix Web</h1>
                       
                        <button className='border-2 border-blue-300 p-1 mt-3 bg-yellow-800 text-white font-semibold rounded-md hover:bg-blue-800 hover:text-black'>
                            <Link to="https://reactvideoapp-beta.vercel.app/" target="_blank">
                                Live Demo
                            </Link>
                        </button>
                    </div>
                </div>

            </div>

        </div>


    )
}
