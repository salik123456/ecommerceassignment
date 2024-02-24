'use client'
import React, {useEffect, useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import dummyproduct from '@/public/ProductSec/dummyproduct.png'
import Image from 'next/image';
import ProductCard from '../../Global/ProductCard';

const SellerSec = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
        .catch(error => console.log('Error fetching products:', error));
    }, []);





    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [jewelryProducts, setJewelryProducts] = useState([]);
    const [electronicsProducts, setElectronicsProducts] = useState([]);

    useEffect(() => {
        const fetchProductsByCategory = async (category, setProducts) => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductsByCategory('men\'s clothing', setMenProducts);
        fetchProductsByCategory('women\'s clothing', setWomenProducts);
        fetchProductsByCategory('jewelery', setJewelryProducts);
        fetchProductsByCategory('electronics', setElectronicsProducts);
    }, []);



  return (
    <div className='site-wrapper '>
        <h2 className='text-primary text-center font-semibold uppercase text-xl'>Best Seller</h2>
        <div className='mt-8'>
        <Tabs>
    <TabList className='text-center flex justify-center items-center'>
      <Tab className='border-none cursor-pointer outline-none text-lg mr-12'>All</Tab>
      <Tab className='border-none cursor-pointer outline-none text-lg mr-12'>Men</Tab>
      <Tab className='border-none cursor-pointer outline-none text-lg mr-12'>Women</Tab>
      <Tab className='border-none cursor-pointer outline-none text-lg mr-12'>Jewelery</Tab>
      <Tab className='border-none cursor-pointer outline-none text-lg'>Electronics</Tab>
    </TabList>
<div className='mt-12'>
<TabPanel>
 <div className='flex flex-wrap justify-between w-full '>
 {allProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}


 </div>
 </TabPanel>
 <TabPanel>
 <div className='flex flex-wrap justify-between w-full '>
                                {menProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
 </TabPanel>
 <TabPanel>
 <div className='flex flex-wrap justify-between w-full '>
                                {womenProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
 </TabPanel>
 <TabPanel>
 <div className='flex flex-wrap justify-between w-full '>
                                {jewelryProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
 </TabPanel>
 <TabPanel>
 <div className='flex flex-wrap justify-between w-full '>
                                {electronicsProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
 </TabPanel>
</div>


  </Tabs>
  </div>
    </div>
  )
}

export default SellerSec
