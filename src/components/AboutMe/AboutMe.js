
import React from 'react'

export default function AboutMe() {
    return (
        <>

            <div className='bg-slate-900 min-h-screen text-white  md:flex justify-evenly py-20 items-center  '>
                <div className=' p-20 text-justify'>
                    <h1 className='text-red-900 text-3xl font-bold mb-4'><span className='text-yellow-300 mr-2 text-3xl font-bold'>About</span>Me</h1>
                    <span>Hi there , my name is Rup Medhi</span>
                    <div className='mt-4 border border-white-900 p-4'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero molestiae rerum id tenetur laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero m</p>

                        <p>Lorem ipsum dolor adelit. Quaerat, vero molestiae rerum id teneturLorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero m laudantium.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero molestiae rerum id tenetur laudantium.</p>

                    </div>
                </div>
                <div >
                    <img src="./img/about.png" alt="about image" />
                </div>
            </div>


        </>
    )
}
