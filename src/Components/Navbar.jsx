import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import search_icon from '../assets/search_icon.png'
import profile_icon from '../assets/profile_icon.png'
import cart_icon from '../assets/cart_icon.png'


const Navbar = () => {
  return (
    <div className="flex items-center justify-between  px-10 py-5 ">
      <img className='w-35' src={logo} alt="" />
      <ul className='flex  gap-5'>
          <NavLink to={'/'} className='flex flex-col gap-1 items-center'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to={'/collection'} className='flex flex-col gap-1 items-center'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to={'/about'} className='flex flex-col gap-1 items-center'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to={'contact'} className='flex flex-col gap-1 items-center'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
          <img className='w-5 cursor-pointer' src={search_icon} alt="" />
          <div className='group relative'>
              <img className='w-5 cursor-pointer' src={profile_icon} alt="" />
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                  </div>
                  
              </div>
              
          </div>
          <Link to={'/cart'} className='relative'>
                      <img className='w-5 cursor-pointer' src={cart_icon} alt="" />
                      <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px] leading-4'>10</p>
              </Link>
      </div>
     </div>  
  )
}

export default Navbar