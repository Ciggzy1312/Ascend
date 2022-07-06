import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className=''>
        <div className='text-center font-semibold my-6'>
            <h1 className='font-bold'>Stay organized and productive</h1>

            <div className=''>
                <p className='text-gray-400'>Track less, work more and reach your goals by shaping your workflows</p>
            </div>
        </div>
        
        <div className='my-12 mx-10'>
            <div className='flex justify-between my-8 w-11/12 mx-auto'>
                <div className='heading w-1/2'>
                    <h2 className='font-bold text-3xl'>Centralize all your projects</h2>

                    <div className='text-md text-gray-800 font-semibold my-2'>
                        <p className=''>From small ones to big, gather all your projects in a single digital workspace. Get a visual overview of where things stands by setting your goals</p>
                    </div>
                </div>

                <div className='image'>
                    <Image src="https://plaky.com/assets/images/web-assets/plaky-screenshot.png" width='450' height='200'/>
                </div>
            </div>

            <div className='flex justify-between my-8 w-11/12 mx-auto'>
                <div className='image'>
                    <Image src="https://plaky.com/assets/images/web-assets/plaky-screenshot.png" width='450' height='200'/>
                </div>

                <div className='heading w-1/2'>
                    <h2 className='font-bold text-3xl'>Centralize all your projects</h2>

                    <div className='text-md text-gray-800 font-semibold my-2'>
                        <p className=''>From small ones to big, gather all your projects in a single digital workspace. Get a visual overview of where things stands by setting your goals</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between my-8 w-11/12 mx-auto'>
                <div className='heading w-1/2'>
                    <h2 className='font-bold text-3xl'>Centralize all your projects</h2>

                    <div className='text-md text-gray-800 font-semibold my-2'>
                        <p className=''>From small ones to big, gather all your projects in a single digital workspace. Get a visual overview of where things stands by setting your goals</p>
                    </div>
                </div>

                <div className='image'>
                    <Image src="https://plaky.com/assets/images/web-assets/plaky-screenshot.png" width='450' height='200'/>
                </div>
            </div>
        </div>

        <div className='bg-white py-12'>
            <div className='text-center font-semibold my-3'>
               <h1 className='font-bold'>Upcoming Features</h1>
               <div className='my-2'>
                    <p className='text-gray-500'>See what we are planning for you</p>
                </div>
            </div>

            <div className='w-5/6 mx-auto'>
                <ul className='grid grid-cols-2 font-medium gap-6'>
                    <li className='flex justify-center bg-[#fcfbff] py-2'>Feature 1</li>
                    <li className='flex justify-center bg-[#fcfbff] py-2'>Feature 2</li>
                    <li className='flex justify-center bg-[#fcfbff] py-2'>Feature 3</li>
                    <li className='flex justify-center bg-[#fcfbff] py-2'>Feature 4</li>
                    <li className='flex justify-center bg-[#fcfbff] py-2'>Feature 5</li>
                    <li className='flex justify-center bg-[#fcfbff] py-2'>Feature 6</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Features