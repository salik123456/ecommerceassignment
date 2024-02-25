import React from 'react';
import productone from '@/public/Cart/productone.png'
import divider from '@/public/Cart/divider.png'
import producttwo from '@/public/Cart/producttwo.png'
import Image from 'next/image';
const CartDetails = () => {
  return (
    <div className='site-wrapper'>
      {/* First Section */}
      <div className="text-center p-4">
        <nav className="text-sm">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-blue-500">Home</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-blue-500">Hot Deal</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center text-primary">Nike Airmax 270 React</li>
          </ol>
        </nav>
      </div>

      {/* Second Section */}
      <div className="mt-8 grid grid-cols-4 items-center gap-4">
        {/* Product */}
        <div className="col-span-1 flex items-center space-x-4">
          <Image src={productone} alt="Product" className="w-16 h-16" />
          <span>Product Name</span>
        </div>
        {/* Price */}
        <div className="col-span-1">
          <span className="text-primary hidden lg:block">$998</span>
        </div>
        {/* Quantity */}
        <div className="col-span-1 flex items-center bg-[#F6F7F8] w-fit py-3 px-6  space-x-4">
          <span className='text-[#33A0FF]'>-</span>
          <span>1</span>
          <span className='text-[#33A0FF]'>+</span>
        </div>
        {/* Unit Price */}
        <div className="col-span-1">
          <span className="text-primary">$998</span>
        </div>

        {/* Repeat the same structure for the second row */}
        {/* Product */}
        <div className="col-span-1 flex items-center space-x-4">
          <Image src={producttwo} alt="Product" className="w-16 h-16" />
          <span>Product Name</span>
        </div>
        {/* Price */}
        <div className="col-span-1">
          <span className="text-primary hidden lg:block">$998</span>
        </div>
        {/* Quantity */}
        <div className="col-span-1 flex items-center bg-[#F6F7F8] w-fit py-3 px-6 space-x-4">
          <span className='text-[#33A0FF]'>-</span>
          <span>1</span>
          <span className='text-[#33A0FF]'>+</span>
        </div>
        {/* Unit Price */}
        <div className="col-span-1">
          <span className="text-primary">$998</span>
        </div>
      </div>

      {/* Third Section */}
      <div className="mt-8 flex lg:flex-row flex-col justify-between">
        {/* Left Side */}
        <div>
          <input type="text" placeholder="Voucher Code" className="border-2 border-gray-300 p-2" />
          <button className="bg-blue-500 text-white px-4 py-2">Redeem</button>
        </div>
        {/* Right Side */}
        <div className='lg:w-[30%] w-full mt-6 lg:mt-0'>
        <div>
          <div className="text-md flex justify-between"><p>Subtotal:</p> <span>$998</span></div>
          <div className="text-md mt-3 flex justify-between"><p>Shipping Fee:</p> <span>$20</span></div>
          <div className="text-md mt-3 flex justify-between"><p>Coupon:</p> <span>No</span></div>
          <Image src={divider}alt='divider' className='w-full my-6'/>
          <div className="text-[30px] mt-3 flex font-medium justify-between"><p>Total:</p> <span>$1000</span></div>
    
        </div>

          {/* Checkout Button */}
      <div className="mt-4">
        <button className="bg-[#33A0FF] w-full text-white px-4 py-4">Checkout</button>
      </div>
      </div>
      </div>

    
    </div>
  );
}

export default CartDetails;
