'use client'

import React, { useState } from 'react'
import Header from './components/Header';
import Banner from './components/Body/Banner';
import Collection from './components/Body/Collection';
import Footer from './components/Footer';
import { Product } from '@/data/collectionData';

const Page = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className='relative'>
      <Header cartCount={cartItems.length} />
      <Banner />
      <Collection onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default Page;
