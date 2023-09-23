import React from 'react';
import './Home.css';  

export default function Home() {
    return (
        <div className='bg-slate-800 min-h-screen flex  flex-wrap items-center text-center py-20 md:flex flex-row justify-evenly scale-in-hor-center  '>
            <div >
                <div className='text-xl text-justify mb-6 tracking-in-contract-bck '>
                    <h1 className='text-3xl text-white font-bold mb-4 flex flex-col md:text-6xl'>Hello everyone!</h1>
                    <span className='text-yellow-400'><span className='text-red-300 flex flex-col'>My name is Rup Jyoti Medhi.</span> I am a Front-End Developer </span>
                </div>
                <div className='text-justify mt-2'>
                    <button className='mr-3 border border-white rounded-full p-2 text-yellow-400 w-32'>Check My CV</button>
                    <button className='border border-white rounded-full p-2 w-32 text-yellow-400'>Visit GitHub</button>
                </div>
            </div>
            <div>
                <img src="/img/Home.png" alt="Home Image" className="w-64 h-auto " />
            </div>
        </div>
    );
}
