import React from 'react'
import { Header } from './Header'
import './Main.scss'
import { Menu } from './Menu'
import { Food } from './Food'
import { Drink } from './Drink'
import { Dessert } from './Dessert'
import { Footer } from './Footer'

export const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Menu />
      <Food />
      <Drink />
      <Dessert />
      <Footer />

    </div>
  )
}
