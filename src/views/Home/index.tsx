import React from 'react'
import Layout from '@/component/Layout'
import Hero from './Hero'
import Cards from './Cards'
import Businesses from './Businesses'
import ClientSection from './ClientSection'
import Bservices from './Bservices'
import Officeroom from './Officeroom'
import PartnerSection from './PartnerSection'
import StartingFive from './StartingFive'
import TeamWork from './TeamWork'



const page = () => {
  return (
<Layout>
    
     <Hero />
       <Businesses />
     <Cards />
<TeamWork />
    <StartingFive />
    <Officeroom />
<ClientSection />
<Bservices />

  <PartnerSection />

</Layout>

  )
}

export default page





