import React from 'react'
import { MdCall } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';

export default function () {
    return (
        <>
            <div className='bg-slate-800 min-h-screen text-white py-24 flex justify-evenly flex-col md:flex-row'>
                <div className='flex flex-col ml-4 mb-4'>
                    <h3 className='text-red-500 font-bold  mb-4 text-5xl'><span className='text-yellow-300 mr-2 text-5xl'>Contact</span>Me</h3>
                    <span className='font-semibold text-xl mb-4'>Lorem ipsum dolor sit amet consectetur adipisicianimi asperiores sequi.</span>

                    <span className='flex items-center gap-2 text-xl font-bold text-yellow-300 '><MdCall className='font-bold'/>7099237939</span>
                    <span  className='flex items-center gap-2 text-xl font-bold text-yellow-300'><MdLocationPin className='font-bold'/>Morigaon Assam India 782412</span>
                    <span  className='flex items-center gap-2 text-xl font-bold text-yellow-300'><FiMail className='font-bold'/>Rupmedhi@gmail.com</span>
                  
                </div>

                <div className='ml-4 w-50 mr-8 md:w-80  '>
                    <form className='flex flex-col '>
                        <label htmlFor="name" className='font-bold' > Name</label>
                        <input type="text" id="name" placeholder=" Enter Your Name Here" className='h-10 rounded-md p-4 mb-4'/>
                        <label htmlFor="mail"  className='font-bold'> Email</label>
                        <input type="email" id="mail" placeholder=" Enter Your Email Here" className='h-10 rounded-md p-4 mb-4' />
                        <label htmlFor="message" className='font-bold' > message</label>
                        <input type="text" id="message" placeholder=" Enter Your message Here" className='h-20 rounded-md p-4 mb-4' />
                        <button className='bg-yellow-300 rounded-md text-black w-32 h-10 flex justify-center items-center mx-auto'>Send message</button>
                    </form>

                </div>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14320.763713731796!2d92.36626613712546!3d26.190466688158207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x375ace0b80ff6ac9%3A0x8843385bb15a540e!2sDharamtul%2C%20Assam!3m2!1d26.1903006!2d92.3739579!5e0!3m2!1sen!2sin!4v1695193614034!5m2!1sen!2sin" width="80%" height="450"  style={{ border: '0' }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
           <div className='flex justify-center bg-slate-800 min-h-screen'>
           <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14320.763713731796!2d92.36626613712546!3d26.190466688158207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x375ace0b80ff6ac9%3A0x8843385bb15a540e!2sDharamtul%2C%20Assam!3m2!1d26.1903006!2d92.3739579!5e0!3m2!1sen!2sin!4v1695193614034!5m2!1sen!2sin"
                width="800"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
           </div>
        </>
    )
}
