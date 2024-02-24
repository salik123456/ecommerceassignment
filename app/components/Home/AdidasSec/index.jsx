import Link from 'next/link'
import React from 'react'
import shoes from '@/public/AdidasSec/shoes.png'
import Image from 'next/image'

const AdidasSec = () => {
  return (
    <div className='site-wrapper h-[80vh] relative bg-[#40BFFF] flex justify-between items-center'>
      <div className='content-sec w-[60%]'>
<h2 className='text-xxl text-white font-medium'>Adidas Men Running <br/>
Sneakers</h2>
<p className='mt-2 text-lg text-white'>Performance and design. Taken right to the edge.</p>
<Link href='/shop' className='shop-btn'>
<p className='text-white text-md font-semibold mt-2'>SHOP NOW</p>
</Link>
      </div>
    
      <Image src={shoes} alt='shoes' className='absolute right-0 top-[-20%] w-[55%]'/>
    </div>
  )
}

export default AdidasSec
