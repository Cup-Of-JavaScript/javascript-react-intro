import React from 'react'
import './Menu.scss'
import { Drink } from './Drink'
import { Food } from './Food'
import { Dessert } from './Dessert'


export const Menu = () => {
  return (
    <div className='menu'>
      <h1 className="menu">Menu</h1>
    <Food />
    <Drink />
    <Dessert />
    </div>
    
  )
}
