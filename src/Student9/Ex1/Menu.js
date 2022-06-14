import React from 'react'
import './Menu.scss'
export const Menu = () => {
  return (
    <header>
    <h1 className="Menu">Menu</h1>
    <div className="Food">
    <h2>Food</h2>
    <ul>
     <li>Hamburger ... $1.00</li>
    <li>Cheeseburger... $1.00</li>
    <li>Hot Dog... $1.00</li>
    <li>Fries... $1.00</li>
    </ul>
    </div>
    <div className="Drink">
    <h3>Drink</h3>
    <ul>
     <li>Coffee... $1.00</li>
    <li>Tea... $1.00</li>
    <li>Milk... $1.00</li>
    <li>Coke... $1.00</li>
    </ul>
    </div>
    <div className="Dessert">
    <h4>Dessert</h4>
    <ul>
    <li>Chocolate Pie... $1.00</li>
    <li>Apple Pie... $1.00</li>
    <li>Cannoli... $1.00</li>
    </ul>
    </div>
    </header>
  
  )
}
