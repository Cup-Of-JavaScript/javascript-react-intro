import React from 'react'
import { Food } from './Food'
import { Drink } from './Drink'
import { Dessert } from './Dessert'

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
