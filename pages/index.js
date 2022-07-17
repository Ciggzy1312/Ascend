import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import Landing from '../components/Home'
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if(session){

    return (
      <div>
        <Dashboard/>
      </div>
    )
  }
  else{
    return (
      <div className="">
        <Landing />
      </div>
    )
  }
}