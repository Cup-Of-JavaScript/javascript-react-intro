import React from 'react'
import { Header } from './Header'
import { Menu } from './Menu'
import { Footer } from './Footer'
import './Main.scss'

export const Main = () => {
  return (
    <div className="Main">
        <Header />
        <Menu />
        <Footer /> 
    </div>
  )
}
