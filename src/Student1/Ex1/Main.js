import React from 'react'
import { Header } from './Header'
import './Main.scss'
import { Menu } from './Menu'
import { Footer } from './Footer'

export const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Menu />
      <Footer />

    </div>
  )
}
