import React from 'react'
import Image from 'next/image'
import BannerImgae from '../../../../assets/banner-desktop.jpg'
import BannerImgaeMobile from '../../../../assets/banner-mobile.jpg'

const Banner = () => {
  return (
    <div className='banner relative h-[700px]'>
      <picture>
        <source media="(max-width: 768px)" srcSet={BannerImgaeMobile.src} />
        <Image
          src={BannerImgae}
          alt='banner'
          className='banner-image object-center object-cover h-full w-full'
          fill
          priority
        />
      </picture>
      <h1 className='headline text-[50px] tracking-[0px] font-[700] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-[1px 1px 3px rgba(0, 0, 0, 0.3)] text-center uppercase text-white max-md:text-[33px]'>
        {`Men's Loden Coats`}
      </h1>
    </div>
  )
}

export default Banner
