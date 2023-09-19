import React from 'react'

export default function Home() {
    return (
        <div className='bg-slate-800 min-h-screen flex flex-wrap  items-center text-center py-20 md:flex flec-row justify-evenly '>
            <div>
                <div className='text-xl text-justify '>
                    <h1 className='text-5xl text-white font-bold'>Hello everyone!</h1>
                    <span className='text-yellow-400'><span className='text-red-300'>My name is Rup Medhi.</span> I am a Software Engineer </span>
                </div>
                <div className='text-justify mt-2'>
                    <button className='mr-3 border border-white rounded-full p-2 text-yellow-400'>Check My CV</button>
                    <button className='border border-white rounded-full p-2 text-yellow-400'>LinkedIn</button>
                </div>
            </div>
            <div >
                <img src="./img/Home.png" alt="Home Image" className="w-64 h-auto" />
            </div>
        </div>
    )
}
