'use client'

import React, { useEffect, useRef, useState} from 'react'
import Header from './components/Header';
import Banner from './components/Body/Banner';
import Collection from './components/Body/Collection';
import Footer from './components/Footer';
import { Product } from '@/data/collectionData';


export interface CartItem extends Product {
  quantity: number
}

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showSecondaryHeader, setShowSecondaryHeader] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [showDiscountPopup, setShowDiscountPopup] = useState(true);

  const handleAddCartItems = (product: Product) => {
    setCartItems(prev => {
      const existingProduct = prev.find(item => item.id === product.id);
      if (existingProduct) {
        // Nếu sản phẩm đã có, tăng quantity
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Nếu chưa có, thêm mới với quantity = 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  
  const handleRemoveFromCart = (productId: number) => {
  setCartItems(prev => prev.filter(item => item.id !== productId));
};

const handleIncreaseQuantity = (productId: number) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const handleDecreaseQuantity = (productId: number) => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};

useEffect(() => {
  const handleScroll = () => {
    if (bannerRef.current) {
      const bannerHeight = bannerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      setShowSecondaryHeader(scrollY > bannerHeight);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="relative">
      <Header
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        showSecondaryHeader={showSecondaryHeader}
      />
      <div ref={bannerRef}>
        <Banner />
      </div>
      <Collection
        cartItems={cartItems}
        handleAddCartItems={handleAddCartItems}
      />
      <Footer />

      {/* Sale off */}
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
        
        {/* Popup Sale OFF */}
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
