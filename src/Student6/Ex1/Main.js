import React from 'react'
import { Header } from './Header'
import { Menu } from './Menu'
import { Footer } from './Footer'
import { Nav } from './Nav'
import './Main.scss'


export const Main = () => {
  return (
    <div className="Main">
        <Header />
        <Nav />
        <Menu />
        <Footer />
    </div>

  )
}
