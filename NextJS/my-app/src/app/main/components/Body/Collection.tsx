'use client'

import React, { useState } from 'react'
import product1 from '../../../../assets/product1.jpg'
import product2 from '../../../../assets/product2.jpg'
import product3 from '../../../../assets/product3.jpg'
import Image from 'next/image'
import { IoSearchOutline } from 'react-icons/io5'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import './Collection.scss'

const productList = [product1, product2, product3,product1, product2, product3,product1, product2, product3,product1, product2, product3]

const Collection = () => {
  
  const [openFilters, setOpenFilters] = useState<number[]>([]);

  const toggleFilter = (index: number) => {
    if (openFilters.includes(index)) {
      setOpenFilters(openFilters.filter((i) => i !== index));
    } else {
      setOpenFilters([...openFilters, index]);
    }
  };

  const filterSections = [
    {
      title: 'Color',
      options: ['Black', 'Brown', 'Camel', 'Charcoal', 'Green', 'Navy Blue'],
      counts: [3, 3, 3, 3, 3, 2]
    },
    {
      title: 'Size',
      options: ['39', '47', 'S – 38S', 'M – 40S', 'L – 42R'],
      counts: [2, 2, 2, 2, 2]
    },
    {
      title: 'Fabric',
      options: ['Loden', 'Tweed', 'Wool'],
      counts: [2, 2, 2]
    }
  ];
  

  return (
    <section className="section-collection bg-white text-black px-10 pt-8 pb-4">
      <p className="mb-6 text-[17px] leading-relaxed">
        For centuries Loden coats kept alpine hunters and herdsmen warm and dry
        through the harsh Austrian winters. The tradition lives on in these
        authentic Loden coats.
      </p>

      <div className="main-collection flex gap-6">
        {/* Filter Sidebar */}
        <div className="filter-container w-[20%]">
          {/* <div className="border-b border-[#e3e3e3] pb-4 mb-4">
            <h3 className="text-[13px] font-semibold uppercase tracking-wide mb-3 flex gap-x-1.5">
              <SlArrowDown className='text-[10px]'/>
              COLOR
            </h3>
            <ul className="space-y-1 text-[14px]">
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Black</div><span>(3)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Brown</div><span>(3)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Camel</div><span>(3)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Charcoal</div><span>(3)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Green</div><span>(3)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Navy Blue</div>
    <span>(2)</span>         </li>
            </ul>
          </div>

          <div className="border-b border-[#e3e3e3] pb-4 mb-4">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide mb-3 flex gap-x-1.5">
              <SlArrowDown className='text-[10px]'/>
              SIZE
            </h3>
            <ul className="space-y-1 text-[14px]">
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                39 </div><span>(2)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                47 </div><span>(2)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />S – 38S </div><span>(2)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />M – 40S </div><span>(2)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />L – 42R </div><span>(2)</span>
              </li>
            </ul>
          </div>

          <div className="pb-4 mb-4">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide mb-3 flex gap-x-1.5">
              <SlArrowDown className='text-[10px]'/>
              FABRIC
            </h3>
            <ul className="space-y-1 text-[14px]">
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Loden </div><span>(2)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Tweed </div><span>(2)</span>
              </li>
              <li className='flex items-center justify-between'>
                <div><input type="checkbox" className="mr-2" />
                Wool </div><span>(2)</span>
              </li>
            </ul>
          </div> */}
          {filterSections.map((section, index) => (
            <div key={index} className="border-b border-[#e3e3e3] pb-4 mb-4">
              <h3
                className="text-[13px] font-semibold uppercase tracking-wide mb-3 flex gap-x-1.5 cursor-pointer"
                onClick={() => toggleFilter(index)}
              >
                {openFilters.includes(index) ? (
                  <SlArrowUp className="text-[10px]" />
                ) : (
                  <SlArrowDown className="text-[10px]" />
                )}
                {section.title}
              </h3>
              <ul
                className={`space-y-1 text-[14px] filter-content ${
                  openFilters.includes(index) ? "show" : "hide"
                }`}
              >
                {section.options.map((option, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div>
                      <input type="checkbox" className="mr-2" />
                      {option}
                    </div>
                    <span>({section.counts[i]})</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Product Section */}
        <div className="collections-container w-[80%]">
          {/* Search Bar */}
          <div className="search-container flex items-center border border-gray-300 rounded-md px-3 py-2 mb-6">
            <IoSearchOutline className="text-[20px] mr-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search products"
              className="w-full outline-none text-[15px]"
            />
          </div>

          {/* Actions */}
          <div className="action-container flex justify-between items-center mb-6">
            <span className="text-[15px] font-medium">
              <span className="font-bold">15</span> Products
            </span>
            <div className="filter-selection flex items-center gap-4 text-[14px]">
              <div className="flex items-center gap-2 bg-gray-100 px-1.5">
                <label htmlFor="sort-by-quanity" className="">
                  Show
                </label>
                <select
                  id="sort-by-quanity"
                  className="border border-transparent h-[44px]"
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                </select>
              </div>
              <div className=" bg-gray-100 px-1.5">
                <select
                  id="sort-by"
                  className="border border-transparent h-[44px]"
                >
                  <option value="">Availability</option>
                  <option value="">Best Selling</option>
                  <option value="">Alphabetically, A-Z</option>
                  <option value="">Alphabetically, Z-A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="collections grid grid-cols-3 gap-6">
            {/* Product Card */}
            {productList.map((item, index) => (
              <div
                key={index}
                className="product group relative bg-gray-200 px-[10px] pt-0 pb-[15px] overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={item}
                  alt={`Product ${index}`}
                  className="w-full h-full object-cover z-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-10 z-10 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Product Info */}
                <div className="product-info absolute bottom-[40px] left-[20px] text-white z-20">
                  <p className="font-[700] text-[21px]/[100%] tracking-[2px] uppercase py-2">
                    {`Mens Classic Loden Overcoat "Shiver No More"`}
                  </p>
                  <p className="font-[100] text-[21px]/[100%]">25.097.000 đ</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection
