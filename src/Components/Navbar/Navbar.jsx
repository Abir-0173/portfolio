import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import menu_icon from '../../assets/hamburger.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [stiky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
    return (
        <nav className={`container ${stiky ? 'dark-nav' : ''} `}>
            <span><Link to="hero" smooth={true} offset={0} duration={500}><img src={logo} className='logo' alt="" /></Link></span>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link className='iffect' to="hero" smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
                <li><Link className='iffect' to="about" smooth={true} offset={-250} duration={500} onClick={toggleMenu}>About</Link></li>
                <li><Link className='iffect' to="service" smooth={true} offset={-240} duration={500} onClick={toggleMenu}>Service</Link></li>
                <li><Link to="contact" smooth={true} offset={-200} duration={500} onClick={toggleMenu}><button className='btn'>Contact</button></Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar