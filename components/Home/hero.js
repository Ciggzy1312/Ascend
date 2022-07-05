import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex justify-between my-20'>
            <div className='w-1/2'>
                <h1 className='font-bold my-4'>Boost your <span className='text-[#885af8]'>productivity</span> and say no to <span className='text-[#885af8]'>procrastination</span></h1>

                <div className='my-4'>
                    <p className='font-medium text-lg text-stone-400'>From planning and managing your personal projects to tracking your tasks and meetings Ascend is your one stop solution</p>
                </div>

                <div className='my-4'>
                    <button className='border-2 border-[#885af8] bg-[#885af8] text-white font-semibold py-1 px-3 rounded inline-flex items-center'>Get Started</button>

                    <button className="border-2 border-[#885af8] text-[#885af8] font-semibold py-1 px-3 rounded inline-flex items-center mx-8">
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className='ml-8 shadow-2xl shadow-violet-400'>
                <Image src="https://plaky.com/assets/images/web-assets/plaky-screenshot.png" width='700' height='400'/>
            </div>
        </div>
    )
}

export default Hero