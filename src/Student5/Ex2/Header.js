import React from 'react'
import { Nav } from './Nav'
import './Header.scss'

export const Header = () => {
  return (
    <div>
        <h1 className="logo"> FootBook </h1>
        <Nav />
    </div>
  )
}