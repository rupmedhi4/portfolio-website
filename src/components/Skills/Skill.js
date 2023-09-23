import React from 'react'
import '../Home/Home.css'

export default function Skill() {
    return (
        <div className='bg-slate-800 min-h-screen text-white  bounce-in-top'>
            <div className=' flex justify-center mx-auto py-10'>
                <div>
                    <h1 className='flex justify-center text-red-500 text-3xl font-bold mb-6 '><span className='text-yellow-200 mr-2'>My</span>Skills</h1>
                    <div className='mx-11'>
                        <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolorum!</span>
                    </div>
                    
                </div>
            </div>

       

            <div className='flex justify-center mt-4  gap-x-5 flex-wrap tracking-in-contract-bck wobble-hor-bottom'>
                <div className='bg-blue-300 p-4 rounded-xl mb-2' >
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="HTML" className='w-40 h-auto ' />
                    <span className='flex justify-center text-red-500 font-bold'>HTML</span>
                </div>
                <div className='bg-blue-300 p-4 rounded-xl mb-2 ' >
                    <img src="./img/css.png" alt="" className='w-40 h-auto ' />
                    <span className='flex justify-center text-red-500 font-bold'>CSS</span>
                </div>
                <div className='bg-blue-300 p-4 rounded-xl mb-2' >
                    <img src="./img/js1.png" alt="" className='w-40 h-auto ' />
                    <span className='flex justify-center text-red-500 font-bold'>JavaScript</span>
                </div>

                <div className='bg-blue-300 p-4 rounded-xl md:hidden mb-2 ' >
                    <img src="./img/react1.png" alt="react image"  className='w-40 h-auto' />
                    <span className='flex justify-center text-red-500 font-bold'>React</span>
                </div>
               
            </div>

            <div className='flex justify-center mt-4 gap-x-5 flex-wrap tracking-in-contract-bck wobble-hor-bottom'>
    
                <div className='bg-blue-300 p-4 rounded-xl hidden md:block ' >
                    <img src="./img/react1.png" alt="react" className='w-40 h-auto ' />
                    <span className='flex justify-center text-red-500 font-bold'>React JS</span>
                </div>
                <div className='bg-blue-300 p-4 rounded-xl mb-2' >
                    <img src="./img/nextjs.png" alt="react" className='w-40 h-auto ' />
                    <span className='flex justify-center text-red-500 font-bold'>Next JS</span>
                </div>
                <div className='bg-blue-300 p-4 rounded-xl ' >
                    <img src="./img/tailwind.png" alt="react" className='w-40 h-auto ' />
                    <span className='flex justify-center text-red-500 font-bold'>Tailwind Css</span>
                </div>
            </div>
            <div className='flex justify-center mt-4 gap-x-5 flex-wrap tracking-in-contract-bck wobble-hor-bottom'>
    
                <div className='bg-blue-300 p-4 rounded-xl mb-2 ' >
                    <img src="./img/redux.png" alt="react" className='w-40 h-auto ' />
                    <span className='flex justify-center text-red-500 font-bold'>Redux Toolkit</span>
                </div>
                <div className='bg-blue-300 p-4 rounded-xl ' >
                    <img src="./img/firebase.png" alt="react" className='w-40 h-auto ' />
                    <span className='flex justify-center text-red-500 font-bold'>Firebase</span>
                </div>
            </div>




        </div>
    )
}
