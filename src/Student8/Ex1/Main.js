import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Menu } from './Menu'
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
