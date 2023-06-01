import Head from 'next/head';
import React, {useState} from 'react';
import NavDropdown from '../components/NavDropdown'
import Navbar from '../components/Navbar'
import Site from '../components/Site'

export const getStaticProps = async () => {
  const res = await fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
  const data = await res.json()   
    
  return {
    props: {
      data,
    },
  }  
}

export default function Home({data}) {

  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showDropdown &&
        <NavDropdown/>
      }      
      <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>      
      <div>
        <Site data={data}></Site>
      </div>
     
    </div>
  )
}
