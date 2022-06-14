import React from 'react'
import './Header.scss'
import {Nav} from './Nav'

export const Header = () => {
    return (
      <div>
          <h1 className="Header">FootBook </h1>
          <Nav />
      </div>
    )
  }