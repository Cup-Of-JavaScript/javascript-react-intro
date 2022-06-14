import React from 'react'
import './Header.scss'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <div className='logo'>
    <h1 className="footbook">FootBook</h1>
        <Nav />
    </div>

  )
}
