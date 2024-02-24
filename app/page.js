import React from 'react'
import '@/app/styles/home.scss'
import HeroSec from './components/Home/HeroSec'
import SellerSec from './components/Home/SellerSec'
import AdidasSec from './components/Home/AdidasSec'
import IconSection from './components/Home/IconSec'
import FeaturedSec from './components/Home/FeaturedSec'

const HomePage = () => {
  return (
    <div className='home-wrapper'>
<HeroSec/>
<SellerSec/>
<AdidasSec/>
<IconSection/>
<FeaturedSec/>
    </div>
  )
}

export default HomePage
