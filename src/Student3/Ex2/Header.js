import React from 'react'
import { Nav } from './Nav'
import './Header.scss'

export const Header = () => {
    return (
        <div>
            <div className="logo">
                <h1>FootBook</h1>
            </div>
            <Nav />
        </div>
    )
}