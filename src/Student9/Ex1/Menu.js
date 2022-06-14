import React from 'react'
import { Dessert } from './Dessert'
import { Drink } from './Drink'
import { Food } from './Food'
import './Menu.scss'
export const Menu = () => {
  return (
        <div>
          <h1 className="menu">Menu</h1>
          <Food />
          <Drink/>
          <Dessert/>
        </div>
  )
}
