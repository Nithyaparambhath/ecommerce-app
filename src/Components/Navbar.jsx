import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-800 text-white flex items-center justify-between p-10'>
        <h1 className='text-3xl font-bold'>Ecommerce App</h1>
        <div>
            <ul className='flex gap-10 items-center'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer bg-white text-black p-3 rounded'>Login / SignUp</li>
                <li><i class="fa-solid fa-cart-shopping"></i><span className='bg-white text-black w-[10%]'>0</span></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar