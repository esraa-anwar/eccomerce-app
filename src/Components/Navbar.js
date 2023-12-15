import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='links'>
                <li><Link to="/">home</Link></li>
                <li><Link to="/product-list">product list</Link></li>
                <li><Link to="contact">contact</Link></li>
                <li><Link to={"/cart"}>cart</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar