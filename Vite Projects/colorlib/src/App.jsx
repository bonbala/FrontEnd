import Blog from './components/Blog'
import Certified from './components/Certified'
import Counter from './components/Counter'
import Course from './components/Course'
import FeedBack from './components/FeedBack'
import Footer from './components/Footer'
import FtcoOffers from './components/FtcoOffers'
import FtcoServices from './components/FtcoServices'
import Gallery from './components/Gallery'
import NavComponent from './components/Nav'
import Quote from './components/Quote'
import Slide from './components/Slide'
import SwitcherBar from './components/SwitcherBar/SwitcherBar'

function App() {

  return (
    <>
    <SwitcherBar/>
    <NavComponent/>
    <Slide/>
    <FtcoServices/>
    <FtcoOffers/>
    <Counter/>
    <Course/>
    <Certified/>
    <Quote/>
    <Blog/>
    <FeedBack/>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default App
