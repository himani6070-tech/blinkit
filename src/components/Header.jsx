import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <>
        <header className='sticky top-0 z-50 bg-white'>
        {/* desktop */}
        <div className=" hidden lg:block shadow">
            <div className='flex justify-between align-center py-3 px-6 '>
                <div  className='flex justify-between align-center gap-6'>
                    <div className='border-r-2 border-gray-200 p-2 flex align-center justify-center'>
                        <span className='text-yellow-400 text-3xl font-bold '>blink</span>
                        <span className='text-green-500 text-3xl font-bold'>it</span>
                    </div>
                    <div className='flex align-center justify-center flex-col'>
                        <h2 className='font-bold'>Delivery in 18 minutes</h2>
                        <p className='text-gray-500'>Badi Chaupar, Jaipur</p>
                    </div>
                </div>
                <div className='flex-1 max-w-2xl h-auto p-3'>
                    <input type="search" placeholder=' enter product' className='border rounded-[15px] flex-1 outline-none w-full p-3'/>
                </div>
                <div className='flex flex-row gap-5 justify-between align-items-center'>
                    <button className='text-2xl'>Logo</button>
                    <button className='bg-[#318616] rounded-[20px] w-[200px] text-center flex items-center align-center justify-center gap-2 text-white'><FaCartShopping/><span>My Cart</span> </button>
                </div>
            </div>
        </div>      
        {/* mobile-phone */}
        <div className="block lg:hidden shadow">
            <div className='p-4'>
                <div className='flex justify-between align-center mt-2'>
                    <div>
                        <h2 className='font-bold'>Delivery in 18 minutes</h2>
                        <p className='text-gray-500'>Badi Chaupar, Jaipur</p>
                    </div>
                    <div className='text-3xl'>
                        <CgProfile />
                    </div>
                </div>
                <div className='flex-1 max-w-full h-auto p-3'>
                    <input type="search" placeholder=' enter product' className='border rounded-[15px] flex-1 outline-none w-full p-3'/>
                </div>
            </div>
        </div>
        </header>
    </>
  )
}
        




   