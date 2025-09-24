import React from 'react'
import Layout from '@/component/Layout'
import Hero from './Hero'
import Cards from './Cards'
import Businesses from './Businesses'
import WhyKMC from './WhyKMC'
import KmcDifference from './KmcDifference'


const page = () => {
  return (
<Layout>
    
     <Hero />
     <Cards />
     <Businesses />

     <WhyKMC />
     <KmcDifference />
</Layout>
 
 
  )
}

export default page





