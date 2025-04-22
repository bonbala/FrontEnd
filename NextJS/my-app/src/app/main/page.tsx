'use client'

import React, { useState } from 'react'
import Header from './components/Header';
import Banner from './components/Body/Banner';
import Collection from './components/Body/Collection';
import Footer from './components/Footer';
import { Product } from '@/data/collectionData';

type CartItem = Product & { quantity: number };

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showDiscountPopup, setShowDiscountPopup] = useState(true);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleIncreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="relative">
      <Header
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <Banner />
      <Collection onAddToCart={handleAddToCart} />
      <Footer />

      {/* 🎁 Get 50% Off Button */}
      <div
        onClick={() => setShowDiscountPopup(true)}
        style={{ filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.15))" }}
        className={`
    bg-white text-black text-[18px]/[22px] text-center content-center font-bold 
    h-12.5 w-[184px] fixed z-50 bottom-0 left-[20px] cursor-pointer rounded-t 
    flex items-center justify-center
    transition-all duration-900 ease-in-out
    ${
      showDiscountPopup
        ? "translate-y-40 opacity-0"
        : "translate-y-0 opacity-100"
    }
  `}
      >
        Get 50% Off
      </div>

      {/* 🔥 Discount Popup */}
      {showDiscountPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
        <div
          style={{
            opacity: 0,
            transform: 'scale(0.95)',
            animation: 'fadeIn 0.4s ease-out forwards'
          }}
          className="bg-white text-black px-8 py-10 rounded-md shadow-lg"
        >
            <div className="uppercase text-center font-bold tracking-tight mb-6 flex content-center">
              <div className="border-b flex-1 h-[1px] my-auto"></div>
              <span className="mx-2">off everything</span>
              <div className="border-b flex-1 h-[1px] my-auto"></div>
            </div>
            <div className="text-center">
              <div className="uppercase text-7xl font-bold">sale</div>
              <div className="flex justify-center items-center">
                <span className="text-9xl">50</span>
                <div className="flex flex-col uppercase">
                  <span className=" text-3xl font-extrabold">off</span>
                  <span className=" text-7xl">%</span>
                </div>
              </div>
            </div>
            <div
              onClick={() => setShowDiscountPopup(false)}
              className="border uppercase text-center font-bold py-1.5 cursor-pointer mt-6"
            >
              shop the sale
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
 