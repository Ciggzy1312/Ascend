import React from 'react'
import Navbar from '../Navbar'
import Hero from './hero'

const Home = () => {
  return (
    <div className='px-4'>
        <div className='mx-10'>
            <Navbar />
        </div>

        <div className='mx-10'>
          <Hero />
        </div>
    </div>
  )
}

export default Home