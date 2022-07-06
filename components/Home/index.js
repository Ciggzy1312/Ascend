import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Features from './features'
import Hero from './hero'

const Home = () => {
  return (
    <div className=''>

    <div className='px-4'>
        <div className='mx-10'>
            <Navbar />
        </div>

        <div className='mx-10'>
          <Hero />
        </div>

        <div className='mx-10'>
          <Features />
        </div>

    </div>
        <div className=''>
          <Footer />
        </div>
    </div>
  )
}

export default Home