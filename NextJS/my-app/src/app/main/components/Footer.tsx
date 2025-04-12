'use client'
import React, { useState, useEffect } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import './footer.scss';
import illustratorImage from '../../../assets/illustration.jpeg'
import Image from 'next/image';
const sections = [
  {
    title: 'Extras',
    items: [
      'The Loden Lifestyle Blog',
      'Search',
      'Customer Reviews',
      'Weavers',
      'Loden Steiner Mill',
      'Tuchfabrik Gebrüder Mehler',
      'Gottstein',
      'FAQ',
    ],
  },
  {
    title: 'Shop',
    items: ['Men', 'Women', 'Felted Slippers & Mittens', 'Leather Bags'],
  },
  {
    title: 'Information',
    items: [
      'My Story',
      'Careers',
      'Garment Care',
      'Sitemap',
      'Austrian Sweater vs. Boiled Wool Jacket?',
      'How to shrink a sweater',
    ],
  },
  {
    title: 'Customer Care',
    items: [
      'Contact',
      'Exchange & Return Policy',
      'Size & Fit Guide',
      'Customer Reviews',
      'Create an Exchange or Return',
    ],
  },
];

const Footer = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 796);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index)); // đóng section nếu đang mở
    } else {
      setOpenSections([...openSections, index]); // mở thêm section
    }
  };

  return (
    <section className="footer-section text-black font-extralight bg-[#dbdfd8]">
      <div className='connect-form flex border-b bg-[#98988b]'>
        <div className='illustrator-container w-[300px] min-h-[342px] max-md:hidden'>
          <Image src={illustratorImage} alt='illustrator' className='w-full h-full object-cover object-center'/>
        </div>
        <div className='form-container text-center flex-1 p-4 flex flex-col justify-center'>
          <h2 className='text-[30px]/[45px] text-[#373f47] tracking-[2px] font-extrabold uppercase mt-1.5'>Stay in touch!</h2>
          <p className='text-[18px]/[22px] text-[#373f47] px-1.5 pt-1 pb-2.5'>Join our community of Loden enthusiasts & take $50 off your first coat</p>
          <form action="" className='flex flex-col'>
            <input type="text" placeholder='First Name' className='!outline-none mx-1.5 my-2.5 pl-4 border bg-white h-[52px] items-center rounded-sm' />
            <input type="text" placeholder='Email' className='!outline-none mx-1.5 pl-4 border bg-white h-[52px] items-center rounded-sm' />
            <div className='px-1.5 py-2.5'>
            <button className='border-2 border-[#573ae7] w-full h-[52px] rounded-sm bg-white text-[#573ae7] text-[20px]/[20px] font-extrabold '>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer flex flex-wrap max-w-[1200px] w-[95%] mx-auto pt-[40px] pb-[20px]">
        {sections.map((section, index) => (
          <div key={index} className="items w-full md:w-[calc(25%-20px)] mx-[10px] mb-4">
            <h4
              className="footer-title uppercase font-[600] text-[18px] tracking-[1px] pb-[5px] flex justify-between items-center cursor-pointer"
              onClick={() => isMobile && toggleSection(index)}
            >
              {section.title}
              {isMobile && (
                <span className="text-[14px]">
                  {openSections.includes(index) ? <SlArrowUp /> : <SlArrowDown />}
                </span>
              )}
            </h4>
            <ul className={`footer-content pt-3.5 ${isMobile ? (openSections.includes(index) ? 'show' : 'hide') : ''}`}>
              {section.items.map((item, i) => (
                <li key={i} className="mb-[15px]">{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="items flex flex-wrap border-t-1 w-full py-[12px] gap-x-0.5 font-extralight">
          © 2025 <p>Robert W. Stolz.</p>
          <p>Powered by Shopify</p>
          <div className='border-l-1 mx-2.5'></div>
          <p>Photo Credits</p>
          <p>Terms</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
