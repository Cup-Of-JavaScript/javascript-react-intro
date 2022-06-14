import React from 'react'
import './Food.scss'

export const Food = () => {
    return (
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
    )
}