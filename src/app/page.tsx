import React from 'react'
import Header from '../components/header'
import Hero from '@/components/hero'
import Sections from '@/components/sections'
import Cta from '@/components/cta'
import Complain from '@/components/complain'
import Footer from '@/components/footer'

const Page = () => {
  return (
    <div className='bg-blue-950'>
      <Header/>
      <Hero/>
      <Sections/>
      <Cta/>
      <Complain/>
      <Footer/>
    </div>
  )
}

export default Page
