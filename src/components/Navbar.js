import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // handle Toggle function (show mobile menu)
    const [menuVisible, setMenuVisible] = useState(false);

    const handleToggle = () => {
        setMenuVisible(!menuVisible);
    };
    // handle toggle ends

    // navChangeOnScroll
    // header reference
    const headerRef = useRef(null);

    const blurHeader = () => {
        if (window.scrollY >= 50) {
            // Addclass
            headerRef.current.classList.add('scroll-header');
        } else {
            // removeClass
            headerRef.current.classList.remove('scroll-header');
        }
    };

    useEffect(() => {
        // add the scroll event when the component is mounted
        window.addEventListener('scroll', blurHeader);
        return () => {
            // remove the scroll event when the component is unmounted
            window.removeEventListener('scroll', blurHeader);
        };
    }, []);
    // navChangeEnds

    return (
        <>
            <header ref={headerRef} className="header" id="header">
                <nav className="nav container">
                    <a href="/" className="nav__logo">
                        Trekking
                    </a>
                    <div className={menuVisible ? 'show-menu' : 'nav__menu'} id='nav-menu'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <NavLink to="/" className={'nav__link'}>Home</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink to="/about" className={'nav__link'}>About</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink to="/blog" className={'nav__link'}>Blog</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink to="/contact" className={'nav__link'}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Toggle & close buttoms */}
                    <div onClick={handleToggle} className="nav-toggle">
                        {
                            !menuVisible
                                ? <i className="ri-menu-line"></i>
                                : <div className="nav__close" id='nav-close'>
                                    <i className="ri-close-large-line"></i>
                                </div>}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar