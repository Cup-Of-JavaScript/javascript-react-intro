import React from 'react'
import './Menu.scss'
import { Food } from './Food'
import { Drink } from './Drink'
import { Dessert } from './Dessert'

export const Menu = () => {
  return (
    <div>
        <div className='Menu'>
           Menu
            <Food />
            <Drink />
            <Dessert />
        </div>
    </div>
  )
}
