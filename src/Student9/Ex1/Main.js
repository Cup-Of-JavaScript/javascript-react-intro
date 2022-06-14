import React from 'react'
import { Header } from './Header'
import { Menu } from './Menu'
import { Footer } from './Footer'
import { Food } from './Food'
import { Drink } from './Drink'
import { Dessert } from './Dessert'
import './Main.scss'
export const Main = () => {
  return (
    <div className="Main">
        <Header />
        <Menu/>
        <Food/>
        <Drink/>
        <Dessert/>
        <Footer/>
    </div>
  )
}
