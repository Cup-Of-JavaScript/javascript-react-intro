import React from 'react'
import './Menu.scss'

export const Menu = () => {
  return (
    <div className='menu'>Menu
    <div className='food'>
        <h2>Food</h2>
    <hr />
    <ul>
        <li>Hamburger ... $1.00</li>
        <li>Cheeseburger... $1.00</li>
        <li>Hot Dog... $1.00</li>
        <li>Fries... $1.00</li>
    </ul>
     </div>

     <div className='drink'>
                <h2>Drink</h2>
                <hr />
                    <ul>
                        <li>Coffee... $1.00</li>
                        <li>Tea... $1.00</li>
                        <li>Milk... $1.00</li>
                        <li>Coke... $1.00</li>
                    </ul>
            </div>
            <div className='dessert'> 
                <h2>Dessert</h2>
                <hr />
                <ul>
                    <li>Chocolate Pie... $1.00</li>
                    <li>Apple Pie... $1.00</li>
                    <li>Cannoli... $1.00</li>
                </ul>
            </div>
    
    </div>
    
  )
}
