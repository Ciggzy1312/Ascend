import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-8'>
        <div className='font-bold text-xl text-[#885af8]'>Ascend</div>

        <div className=''>
            <ul className='flex font-semibold'>
                <li className='mx-4'>Home</li>
                <li className='mx-4'>Features</li>
                <li className='mx-4'>About</li>
            </ul>
        </div>

        <div className=''>
            <button className='bg-black font-semibold text-white text-sm px-2 py-1 rounded'>Star us on Github</button>
        </div>
    </div>
  )
}

export default Navbar