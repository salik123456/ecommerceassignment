import Image from 'next/image'
import React from 'react'
import siteicon from '@/public/Global/icon.png'
import facebook from '@/public/Global/facebook.png'
import twitter from '@/public/Global/twitter.png'
import brands from '@/public/Global/Brands.png'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='site-wrapper pb-[2rem] footer-sec bg-[#BCDDFE]'>
<div className='footer-first flex lg:flex-row flex-col justify-between'>
<div className='lg:w-[32%] w-full flex flex-col'>
<div className='flex flex-row items-center'>
<Image src={siteicon} alt='icon'/>
<p className='ml-2 text-md font-bold'>E-Comm</p>
</div>
<p className='text-[#22262A] text-xs mt-4 lg:w-[75%] w-full'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
</p>
</div>


<div className='lg:w-[32%] w-full  mt-4 lg:mt-0 flex flex-col'>
<div className='flex flex-row items-center'>

<p className=' text-md font-medium'>Follow Us</p>
</div>
<p className='text-[#22262A] text-xs mt-4 lg:w-[65%] w-full'>
Since the 1500s, when an unknown printer took a galley of type and scrambled.
</p>
<div className='mt-6 flex '>
<Image src={facebook} alt='facebook'/>
<Image src={twitter} alt='twitter' className='ml-8'/>
</div>
</div>

<div className='lg:w-[32%] w-full lg:mt-0 mt-4 flex flex-col'>
<div className='flex flex-row items-center'>

<p className=' text-md font-medium'>Contact Us</p>
</div>
<p className='text-[#22262A] text-[14px] mt-4  w-full'>
E-Comm , 4578<br/> Marmora Road,<br/> Glasgow D04 89GR
</p>

</div>
</div>

<div className='footer-second mt-12 flex lg:flex-row flex-col justify-between'>
<div className='menu=col w-full lg:w-[23%]'>
<p className=' text-md font-normal'> Information</p>
<div className='flex flex-col mt-2 lg:mt-8'>
<Link href='' className='text-[14px]'>About Us</Link>
<Link href='' className='mt-1 text-[14px]'>Information</Link>
<Link href='' className='mt-1 text-[14px]'>Privacy Policy</Link>
<Link href='' className='mt-1 text-[14px]'>Terms & Conditions</Link>
</div>




</div>

<div className='menu=col w-full mt-6 lg:mt-0 lg:w-[23%]'>
<p className=' text-md font-normal'> Service</p>
<div className='flex flex-col mt-2 lg:mt-8'>
<Link href='' className='text-[14px]'>About Us</Link>
<Link href='' className='mt-1 text-[14px]'>Information</Link>
<Link href='' className='mt-1 text-[14px]'>Privacy Policy</Link>
<Link href='' className='mt-1 text-[14px]'>Terms & Conditions</Link>
</div>




</div>

<div className='menu=col w-full mt-6 lg:mt-0  lg:w-[23%]'>
<p className=' text-md font-normal'> My Account</p>
<div className='flex flex-col mt-2 lg:mt-8'>
<Link href='' className='text-[14px]'>About Us</Link>
<Link href='' className='mt-1 text-[14px]'>Information</Link>
<Link href='' className='mt-1 text-[14px]'>Privacy Policy</Link>
<Link href='' className='mt-1 text-[14px]'>Terms & Conditions</Link>
</div>




</div>


<div className='menu=col w-full mt-6 lg:mt-0  lg:w-[23%]'>
<p className=' text-md font-normal'> Our Offers</p>
<div className='flex flex-col mt-2 lg:mt-8'>
<Link href='' className='text-[14px]'>About Us</Link>
<Link href='' className='mt-1 text-[14px]'>Information</Link>
<Link href='' className='mt-1 text-[14px]'>Privacy Policy</Link>
<Link href='' className='mt-1 text-[14px]'>Terms & Conditions</Link>
</div>




</div>
</div>

<div className='border-t border-[#F6F7F8]  mb-6 mt-12 ' />
<div className='flex justify-between lg:flex-row flex-col'>
<div>
<p className='text-[#C1C8CE] text-center lg:text-left text-xs'>© 2018 Ecommerce theme by www.bisehnbaev.com</p>
</div>
<div className='flex justify-center lg:justify-start mt-4 lg:mt-0'>
  <Image src={brands} alt='brand'/>
</div>
</div>

    </div>
  )
}

export default Footer
