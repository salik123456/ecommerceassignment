import Link from 'next/link'
import React from 'react'
import shoes from '@/public/AdidasSec/shoes.png'
import Image from 'next/image'

const AdidasSec = () => {
  return (
    <div className='site-wrapper lg:h-[80vh] relative bg-[#40BFFF] flex lg:flex-row flex-col justify-between items-center'>
      <div className='content-sec w-full lg:w-[60%]'>
<h2 className='lg:text-xxl text-xl text-white font-medium'>Adidas Men Running <br/>
Sneakers</h2>
<p className='mt-2 lg:text-lg text-md text-white'>Performance and design. Taken right to the edge.</p>
<Link href='/shop' className='shop-btn'>
<p className='text-white text-[14px] lg:text-md font-semibold mt-2'>SHOP NOW</p>
</Link>
      </div>
    
      <Image src={shoes} alt='shoes' className='lg:absolute static right-0 top-[-20%] w-full mt-4 lg:mt-0 lg:w-[55%]'/>
    </div>
  )
}

export default AdidasSec
