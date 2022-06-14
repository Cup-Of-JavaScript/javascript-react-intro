import React from 'react'
import './Menu.scss'

export const Menu = () => {
  return (
    <div>
        <div className='Menu'>
           Menu
           <div className='Food'>
           <h3>Food</h3>
           <hr/>
           <ul>
            <li>Hamburger... $1.00</li>
            <li>Cheeseburger... $1.00</li>
            <li>Hot Dog... $1.00</li>
            <li>Fries... $1.00</li>
           </ul>
           </div>

           <div className='Drink'>
           <h3>Drink</h3>
           <hr/>
           <ul>
            <li>Coffee... $1.00</li>
            <li>Tea... $1.00</li>
            <li>Milk... $1.00</li>
            <li>Coke... $1.00</li>
           </ul>
           </div>

           <div className='Dessert'>
           <h3>Dessert</h3>
           <hr/>
           <ul>
            <li>Chocolate Pie... $1.00</li>
            <li>Apple Pie.. $1.00</li>
            <li>Cannoli... $1.00</li>
           </ul>
           </div>

        </div>
    </div>
  )
}
