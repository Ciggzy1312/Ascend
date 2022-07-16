import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import Landing from '../components/Home'

export default function Home() {
  return (
    <div className="bg-[#fcfbff]">
      {/*<Landing />*/}
      <Dashboard />
    </div>
  )
}
