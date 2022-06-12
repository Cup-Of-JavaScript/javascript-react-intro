import React from 'react'
import { Nav } from './Nav'
import './Header.scss'

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
