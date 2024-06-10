import React from 'react'
import "../App.css"

import Feature from './feature'
import Hero from './hero'
import WhoWeAre from './whoWeAre'
import Identity from './identity'
import News from './news'
import Resources from './resources'
import ContactUs from './contactUs'
import Footer from './footer'

export default function Homepage() {
  return (
   <div>
    <Hero/>
    <Feature/>
    <WhoWeAre/>
    <Identity/>
    <News/>
    <Resources/>
    <ContactUs/>
    <Footer/>
   </div>
  
  )
}
