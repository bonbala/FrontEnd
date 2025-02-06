import { Provider } from "./components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router";
import ReactHooks from "./components/ReactHooks/ReactHooks.jsx"
import RegisterComponent from "./components/ReactRouter/RegisterComponent.jsx"
import HomePage from "./components/ReactRouter/HomePage.jsx"
import '../src/App.css'
import AboutPage from "./components/ReactRouter/AboutPage.jsx"
import Contact from "./components/ReactRouter/Contact.jsx"
import Menu from "./components/ReactRouter/HomePage.jsx"
import Layout from "./Layout/index.jsx"
import Home from "./components/ReactRouter/Home.jsx"
import DetailComponent from "./components/ReactRouter/DetailComponent.jsx"
import { ThemeProvider } from "./Store/Context.jsx"
import ClassComponent from "./components/ClassComponent.jsx"
import ManagerEmployee from "./components/ManagerEmployee/index.jsx"
import ManagerHuman from "./components/ManagerHuman/index.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode> 
    <Provider>
        <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<RegisterComponent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:id" element={<DetailComponent />} />
          <Route path="/class" element={<ClassComponent />} />
          <Route path="/managerEmployeePage" element={<ManagerEmployee/>} />
          <Route path="/managerHuman" element={<ManagerHuman/>} />
          </Route>
        </Routes>
        </ThemeProvider> 
        </Provider>    
    </StrictMode>
  </BrowserRouter>
);
