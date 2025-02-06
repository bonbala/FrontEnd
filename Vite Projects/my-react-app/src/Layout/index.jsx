import React from 'react'
import Menu from '../components/ReactRouter/HomePage'
import { Outlet} from "react-router";
const Layout = () => {
  return (
    <div>
      <Menu/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
