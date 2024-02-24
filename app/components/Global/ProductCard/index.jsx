import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className='w-[23%] mt-2 p-3'>
      <Image src={product.image} alt={product.title} width={100} height={100} className='w-full h-[30vh]' />
      <div className='product-desc flex text-center py-4   border-t-0 flex-col'>
        <p className='font-bold text-md line-clamp-1'>{product.title}</p>
        <div className='price-box mt-6 flex items-center w-full mx-auto justify-between'>
          <p className='text-[#223263] font-bold text-md'>${product.price}</p>
          <p className='text-xs text-[#9098B1] ml-4 '>{product.category}</p>
          <p className='text-[#FB7181] text-xs font-bold'>Count: {product?.rating?.count}</p>
          {/* Add any other details you want to display */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
