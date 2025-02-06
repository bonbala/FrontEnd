import React, { useRef, useState, useEffect } from 'react';
import './collectionProdcut.css';
import { Products } from '../../../assets/Database/data';
import CardProductComponent from '../../CardProductComponent';
import { FaArrowRightLong } from "react-icons/fa6";

const CollectionProductComponent = () => {
  const slideRef = useRef(null); // Tham chiếu đến phần tử slide-product
  const [visibleProducts, setVisibleProducts] = useState(Products);

  useEffect(() => {
    const handleResize = () => {
      if (slideRef.current) {
        const width = slideRef.current.offsetWidth;
        if (width <= 540) {
          setVisibleProducts(Products.slice(0, 6)); 
        } else {
          setVisibleProducts(Products); 
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="collect-prodcut-component">
      <div className="context">
        <div className="btn">
          <button>New Arrivals</button>
          <button>Best Sellers</button>
        </div>
        <div className="link">
          <a href="">VIEW ALL</a>
        </div>
      </div>
      <div
        ref={slideRef}
        className="slide-product"
        style={{ display: 'flex', gap: '10px', marginTop: '20px' }}
      >
        {visibleProducts.map((item) => (
          <CardProductComponent key={item.id} />
        ))}
      </div>
      <div className="mobile-link">
        <a href="">
          VIEW ALL
          <FaArrowRightLong className='icon-arrow' style={{ color: 'white' }} />
        </a>
      </div>
    </section>
  );
};

export default CollectionProductComponent;
