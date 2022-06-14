import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Posts } from './Posts'
import { Groups } from './Groups'
import './Main.css'

export const Main = () => {
  return (
    <div>
        <Header />
        <Posts />
        <Groups />
        <Footer />
    </div>
  )
}
