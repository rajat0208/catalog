import React from 'react'

import Feature from './feature'
import "../App.css"


import Hero from './hero'
import WhoWeAre from './whoWeAre'

export default function Homepage() {
  return (
   <div>
    <Hero/>
    <Feature/>
    <WhoWeAre/>
   </div>
  
  )
}
