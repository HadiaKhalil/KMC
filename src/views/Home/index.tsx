import React from 'react'
import Layout from '@/component/Layout'
import Hero from './Hero'
import Cards from './Cards'
import Businesses from './Businesses'
import WhyKMC from './WhyKMC'
import KmcDifference from './KmcDifference'
import TalentStrategy from './TalentStrategy'
import FAQSection from './FAQSection'


const page = () => {
  return (
<Layout>
    
     <Hero />
     <Cards />
     <Businesses />

     <WhyKMC />
     <KmcDifference />
      <TalentStrategy />
      <FAQSection />
 
</Layout>

  )
}

export default page





