"use client"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar3 = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-orange-200' >
            <div className='max-w-6xl flex justify-between items-center px-5 py-2 mx-auto'>
                <div className="w-20">
                    <img src="https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png" alt="" />
                </div>



                <div className={` ${open ? "translate-x-0" : "translate-x-full"} flex text-[#8c5f1d] gap-4 fixed md:relative inset-0 md:translate-x-0
                 bg-orange-200 flex-col md:flex-row md:bg-transparent p-5 transition-all duration-500`} >
                    <div className="md:hidden  flex justify-end py-3">
                        <X onClick={() => setOpen(!open)} className='cursor-pointer' />
                    </div>
                    <Link href="/">Home</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>

                <div className="md:hidden text-[#8c5f1d]    ">
                    <Menu className='cursor-pointer' onClick={() => setOpen(!open)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar3