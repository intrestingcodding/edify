import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#f7f8fd] pt-16'>
            <div className="grid md:grid-cols-[2fr,1fr,1fr,1fr] grid-cols-2 gap-5  max-w-5xl mx-auto px-4 border-b-[0.5px] border-gray-300 py-5">

                <div className="grid gap-1">
                    <img className='h-8' src="https://edifyelite.com.pk/images/logo.png" alt="" />
                    <h4 className='text-gray-400'>Study Abroad Consultants</h4>
                    <p className='text-sm text-gray-400'>shan.ali@edify.pk <br />
                        +92 321 9822444</p>
                </div>
                <div className="grid gap-2">
                    <h4 className='font-semibold text-xl'>Pages</h4>
                    <p className="text-gray-400 text-sm">Blogs</p>
                    <p className="text-gray-400 text-sm">Services</p>
                    <p className="text-gray-400 text-sm">About</p>
                    <p className="text-gray-400 text-sm">Contact Us</p>
                </div>
                <div className="grid gap-2">
                    <h4 className='font-semibold text-xl'>Socials</h4>
                    <p className="text-gray-400 text-sm">Youtube</p>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-gray-400 text-sm">Instagram</p>
                    <p className="text-gray-400 text-sm">Facebook</p>
                </div>
                <div className="grid gap-2">
                    <h4 className='font-semibold text-xl'>Services</h4>
                    <p className="text-gray-400 text-sm">SAT</p>
                    <p className="text-gray-400 text-sm">Common App</p>
                    <p className="text-gray-400 text-sm">Profile Bulding</p>
                    <p className="text-gray-400 text-sm">JVY Universities</p>
                </div>
            </div>
            <div className="flex justify-center items-center py-5">
                <p className='text-gray-400'>Copyright © 2024 Edify Elite. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer