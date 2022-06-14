import React from 'react'
import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'
import './Main.scss'

export const Main = () => {
  return (
    <div className="Main">
        <Header />
        <Body />
        <Footer />
    </div>
  )
}
