'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import product from '@/public/FeaturedSec/product.png';
import rating from '@/public/FeaturedSec/rating.png';

const FeaturedSec = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=desc&limit=3') // Sort in descending order and limit to 3 items
      .then(res => res.json())
      .then(data => setFeaturedProducts(data))
      .catch(error => console.error('Error fetching featured products:', error));
  }, []);

  return (
    <div className='site-wrapper'>
      <h2 className='text-primary text-center font-semibold uppercase text-xl'>Featured Products</h2>
      <div className='mt-8 flex lg:flex-row flex-col justify-between items-center'>
        {featuredProducts.map(product => (
          <div key={product.id} className='featured-box mt-6 lg:mt-0 flex justify-between items-center w-full lg:flex-row flex-col  lg:w-[31%]'>
            <div>
              <Image src={product.image} alt={product.title} className='w-full h-auto'width={100} height={100}/>
            </div>
            <div className='lg:ml-4 text-center  lg:text-left mx-auto lg:mr-0'>
              <p className='text-primary mt-4 lg:mt-0 text-md lg:text-lg'>{product.title}</p>
              <Image src={rating} className='mt-2 lg:w-auto w-[9rem] mx-auto lg:mx-0' />
              <div className='mt-4 text-center lg:text-left'>
                <p className='text-[#FF4858] text-md'>${product.price} <span className='text-[#C1C8CE] line-through ml-1'>{product.price + 100}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-20 w-full lg:w-[50%] mx-auto text-center flex items-center'>
      <div className="flex lg:flex-row flex-col lg:h-[9vh] items-center w-full border border-solid border-blue-200 rounded-md px-4 pl-0 lg:pl-auto pr-0 py-0">
  <input
    type="text"
    placeholder="Search query"
    className="lg:flex-1 mr-2 h-[8vh] lg:h-auto border-none focus:outline-none"
    style={{ borderColor: '#BCDDFE', borderRadius: '8px' }}
  />
<button
  type="button"
  className=" text-white border border-[#40BFFF] text-md font-semibold px-4 h-full py-2 rounded-md w-full lg:w-[25%] rounded-l-none"
  style={{ backgroundColor: '#40BFFF' }}
>
  Search
</button>

</div>

      </div>
    </div>
  );
};

export default FeaturedSec;
