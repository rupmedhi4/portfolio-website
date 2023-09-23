
import React from 'react'
import './AboutMe.css'
import '../Home/Home.css'


export default function AboutMe() {
    return (
        <>

            <div className='bg-slate-900 min-h-screen text-white  md:flex justify-evenly py-20 items-center scale-in-hor-right '>
                <div className=' p-20 text-justify tracking-in-contract-bck '>
                    <h1 className='text-red-900 text-3xl font-bold mb-4'><span className='text-yellow-300 mr-2 text-3xl font-bold'>About</span>Me</h1>
                    <span>Hi there , my name is Rup Medhi</span>
                    <div className='mt-4 border border-white-900 p-4'>
                        <p>👋 Hey there! I'm Rup Jyoti Medhi, a fresh and passionate Front-End Developer</p>

                        <p> diving into the tech world. I wield the magic of React, JavaScript, HTML, CSS, Firebase, and Redux to craft captivating web experiences.</p>

                        <p> Firebase enthusiast, Redux maestro, and a perpetual learner. Let's code the future together! 🚀</p>

                    </div>
                </div>
                <div >
                    <img src="./img/about.png" alt="about image" />
                </div>
            </div>


        </>
    )
}
