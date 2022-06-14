import React from 'react'
import './Header.scss'
import {Nav} from './Nav'

export const Header = () => {
  return (
    <div>
        <div className="logo">
            Dollar Food Store
        </div>
      <Nav />  
   </div>
  )
}
