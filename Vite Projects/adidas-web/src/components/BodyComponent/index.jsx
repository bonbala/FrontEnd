import React from 'react'
import './index.css'
import VideoComponent from './VideoComponent/VideoComponent'
import CollectionProductComponent from './CollectionProductComponent/CollectionProductComponent'
import CollectionCardComponent from './CollectionCardComponent/CollectionCardComponent'
import KeyWordComponent from './KeyWordComponent/KeyWordComponent'
import BlogComponent from './BlogComponent/BlogComponent'
import QuickLinkComponent from './QuickLinkComponent/QuickLinkComponent'
import SEOcomponent from './SEOcomponent/SEOcomponent'


const BodyComponent = () => {
  return (
    <>
    <VideoComponent/>
    <CollectionProductComponent/>
    <CollectionCardComponent/>
    <KeyWordComponent/>
    <BlogComponent/>
    <QuickLinkComponent/>
    <SEOcomponent/>
    </>
  )
}

export default BodyComponent
