import React from 'react'
import { Header } from './Header'
import { Posts } from './Posts'
import { Groups } from './Groups'
import { Footer } from './Footer'
import './Main.css'

export const Main = () => {
  return (
    <div>
        Hello I'm student id: 3.
        <Header />
        <Posts />
        <Groups />
        <Footer />
    </div>
  )
}