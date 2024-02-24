import React from 'react'
import shipping from '@/public/Whyus/shipping.png'
import refund from '@/public/Whyus/refund.png'
import support from '@/public/Whyus/support.png'
import Image from 'next/image'

const IconSection = () => {
  return (
    <div className='site-wrapper'>
      <div className='flex lg:flex-row flex-col justify-between'>
<div className='icon-box flex flex-col text-center items-center w-full lg:w-1/3'>
<Image src={shipping} alt='shipping'/>
<p className='text-[25px] mt-5 font-medium'>FREE SHIPPING</p>
</div>

<div className='icon-box flex flex-col text-center items-center w-full lg:w-1/3'>
<Image src={refund} alt='refund'/>
<p className='text-[25px] mt-5 font-medium'>100% REFUND</p>
</div>

<div className='icon-box flex flex-col text-center items-center w-full lg:w-1/3'>
<Image src={support} alt='SUPPORT'/>
<p className='text-[25px] mt-5 font-medium'>SUPPORT 24/7</p>
</div>
      </div>
    </div>
  )
}

export default IconSection
