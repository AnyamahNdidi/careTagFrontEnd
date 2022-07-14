import React from 'react'
import { Header } from '../AllPages/Index'
import Explore from './Explore'
import Hero from './Hero'
import Hey from './Hey'
import HowItsWork from './HowItsWork'
import Search from './Search'
import Testimony from './Testimony'

function Index() {
  return (
    <div>
    <Header/>
    <Hero/>
    <HowItsWork/>
    <Explore/>
    <Search/>
    <Hey/>
    <Testimony/>
    </div>
  )
}

export default Index