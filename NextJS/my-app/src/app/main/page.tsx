import React from 'react'
import Header from './components/Header';
import Banner from './components/Body/Banner';
import Collection from './components/Body/Collection';
import Footer from './components/Footer';


const page = () => {
  return (
    <div className='relative'>
      <Header/>
      <Banner/>
      <Collection/>
      <Footer/>
    </div>
  )
}

export default page
