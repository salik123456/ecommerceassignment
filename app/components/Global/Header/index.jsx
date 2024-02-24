'use client'
import React, { useState } from 'react';
import arrowdown from '@/public/Global/arrow-down.svg';
import Image from 'next/image';
import profile from '@/public/Global/profile.svg'
import cart from '@/public/Global/Cart.svg'
import search from '@/public/Global/search-icon.svg'
import Link from 'next/link';

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        <div className='lg:w-[30%] w-auto flex'>
                {/* Burger icon for mobile */}
                <div className="block lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
            {!isMobileMenuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        <div className="dropdown lg:block hidden text-primary relative cursor-pointer">
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

        <div className="dropdown ml-2 text-primary hidden lg:block relative cursor-pointer">
          <div className="dropdown-toggle flex" onClick={toggleCurrencyDropdown}>
            <span className='text-md'>{selectedCurrency}</span>
            <Image src={arrowdown} alt='arrow-down' className={`dropdown-icon ml-1 ${isCurrencyOpen ? 'open' : ''}`} />
          </div>
          {isCurrencyOpen && (
            <div className="dropdown-menu absolute hidden lg:flex flex-col">
              <span onClick={() => selectCurrency('USD')} >USD</span>
              <span className='mt-1 ' onClick={() => selectCurrency('EUR')}>EUR</span>
              <span className='mt-1 ' onClick={() => selectCurrency('GBP')}>GBP</span>
              {/* Add more currencies as needed */}
            </div>
          )}
        </div>
        </div>
        <div className='lg:w-[70%] w-full items-end flex justify-end'>
<div className='nav-list hidden lg:flex'>
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
         {/* Mobile Menu */}
         {isMobileMenuOpen && (
          <>
        <div className="lg:hidden mt-4">
          <Link className='block mb-2 font-medium text-lg uppercase text-[#33A0FF]' href='/'>Home</Link>
          <Link className='block mb-2 text-primary font-medium text-lg uppercase' href='/'>Bags</Link>
          <Link className='block mb-2 text-primary font-medium text-lg uppercase' href='/'>Sneakers</Link>
          <Link className='block mb-2 text-primary font-medium text-lg uppercase' href='/'>Belt</Link>
          <Link className='block mb-2 text-primary font-medium text-lg uppercase' href='/'>Contact</Link>
        </div>
        <div className="dropdown ml-2 text-primary relative cursor-pointer">
          <div className="dropdown-toggle flex" onClick={toggleCurrencyDropdown}>
            <span className='text-md'>{selectedCurrency}</span>
            <Image src={arrowdown} alt='arrow-down' className={`dropdown-icon ml-1 ${isCurrencyOpen ? 'open' : ''}`} />
          </div>
          {isCurrencyOpen && (
            <div className="dropdown-menu absolute lg:hidden flex flex-col">
              <span onClick={() => selectCurrency('USD')} >USD</span>
              <span className='mt-1 ' onClick={() => selectCurrency('EUR')}>EUR</span>
              <span className='mt-1 ' onClick={() => selectCurrency('GBP')}>GBP</span>
         
            </div>
          )}
        </div>
        <div className="dropdown text-primary block lg:hidden relative cursor-pointer">
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
        </>
      )}
      <div className='menu-text mt-8 lg:flex hidden justify-between items-end float-right lg:w-[65%]'>
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
