import React from 'react'
import "../App.css"

import Feature from './feature'
import Hero from './hero'
import WhoWeAre from './whoWeAre'
import Identity from './identity'
import News from './news'

export default function Homepage() {
  return (
   <div>
    <Hero/>
    <Feature/>
    <WhoWeAre/>
    <Identity/>
    <News/>
   </div>
  
  )
}
