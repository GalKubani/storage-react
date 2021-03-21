import React from 'react'
import { NavLink } from 'react-router-dom'

const Header=()=>{

    return (
        <div className="header">
            <div className="header__nav">
                <NavLink activeClassName="header__active-link" className="home-nav" to="/home"> Home</NavLink>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Header