'use client'
import React, { useState } from 'react';
import arrowdown from '@/public/Global/arrow-down.svg';
import Image from 'next/image';
import profile from '@/public/Global/profile.svg'
import cart from '@/public/Global/cart.svg'
import search from '@/public/Global/search-icon.svg'
import Link from 'next/link';

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLangOpen(false);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  return (
    <div className='header-wrapper'>
      <div className='w-full flex justify-between items-center'>
        <div className='lg:w-[30%] w-full flex'>
        <div className="dropdown text-primary relative cursor-pointer">
          <div className="dropdown-toggle flex" onClick={toggleLangDropdown}>
            <span className='text-md'>{selectedLanguage}</span>
            <Image src={arrowdown} alt='arrow-down' className={`dropdown-icon ml-1 ${isLangOpen ? 'open' : ''}`} />
          </div>
          {isLangOpen && (
            <div className="dropdown-menu absolute flex flex-col">
              <span onClick={() => selectLanguage('EN')} >EN</span>
              <span className='mt-1' onClick={() => selectLanguage('FR')}>FR</span>
              <span className='mt-1' onClick={() => selectLanguage('ES')}>ES</span>
              <span className='mt-1' onClick={() => selectLanguage('DE')}>DE</span>
            </div>
          )}
        </div>

        <div className="dropdown ml-2 text-primary relative cursor-pointer">
          <div className="dropdown-toggle flex" onClick={toggleCurrencyDropdown}>
            <span className='text-md'>{selectedCurrency}</span>
            <Image src={arrowdown} alt='arrow-down' className={`dropdown-icon ml-1 ${isCurrencyOpen ? 'open' : ''}`} />
          </div>
          {isCurrencyOpen && (
            <div className="dropdown-menu absolute flex flex-col">
              <span onClick={() => selectCurrency('USD')} >USD</span>
              <span className='mt-1 ' onClick={() => selectCurrency('EUR')}>EUR</span>
              <span className='mt-1 ' onClick={() => selectCurrency('GBP')}>GBP</span>
              {/* Add more currencies as needed */}
            </div>
          )}
        </div>
        </div>
        <div className='lg:w-[70%] w-full items-end flex justify-end'>
<div className='nav-list flex'>
<Image src={profile} alt='profile'/>
<p className='text-md ml-2'>My profile</p>
</div>
<div className='nav-list ml-4 flex'>
    <Image src={cart} alt='cart'/>
    <p className='text-md ml-2 hidden'>Cart</p>
    <sup className="bg-red-500 text-white items-center flex justify-center rounded-full px-2 ml-1">2</sup>
</div>

<div className='nav-list ml-4 flex'>
<Image src={cart} alt='cart' className='hidden'/>
<p className='text-md ml-2'>Items</p>
</div>
<div className='nav-list ml-4 flex'>
<p className='text-md text-[#262626] opacity-50 '>$ 0.00</p>
<Image src={search} alt='cart' className='ml-2'/>

</div>
        </div>
      </div>
      <div className='menu-text mt-8 flex justify-between items-end float-right lg:w-[65%]'>
<Link className='font-medium text-lg uppercase text-[#33A0FF]' href='/'>Home</Link>
<Link className='text-primary font-medium text-lg uppercase' href='/'>Bags</Link>
<Link className='text-primary font-medium text-lg uppercase' href='/'>Sneakers</Link>
<Link className='text-primary font-medium text-lg uppercase' href='/'>Belt</Link>
<Link className='text-primary font-medium text-lg uppercase' href='/'>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
