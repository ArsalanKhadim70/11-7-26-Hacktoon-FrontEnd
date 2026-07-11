import React, { useState, memo, useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router';
import "./navbar.css";

const navLinks = [
    { to: '/', label: 'Home', icon: 'home' },
    { to: '/about', label: 'About', icon: 'info-circle' },
    { to: '/contact', label: 'Contact', icon: 'envelope' },
    { to: '/users', label: 'Users', icon: 'users' },
    { to: '/todo', label: 'Todo', icon: 'tasks' },
    { to: '/services', label: 'Services', icon: 'cogs' },
    { to: '/slider', label: 'Slider', icon: 'images' },
    { to: '/bulb', label: 'Bulb', icon: 'lightbulb' },
];

const Navbar = () => {
    const [openNavSecond, setOpenNavSecond] = useState(false);
    const { pathname } = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setOpenNavSecond(false);
    }, [pathname]);

    return (
        <MDBNavbar expand='lg' className='navbar-custom' dark>
            <MDBContainer fluid>
                <MDBNavbarBrand className='navbar-brand-custom'>
                    <MDBIcon icon='bolt' className='me-2' />
                    MyApp
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    className='navbar-toggler-custom'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas className='navbar-toggler-icon-custom' />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNavSecond}>
                    <MDBNavbarNav className='ms-auto navbar-nav-custom'>
                        {navLinks.map((link) => (
                            <MDBNavbarItem key={link.to} className='nav-item-custom'>
                                <MDBNavbarLink>
                                    <Link
                                        to={link.to}
                                        className={`nav-link-custom ${pathname === link.to ? 'active' : ''}`}
                                    >
                                        <MDBIcon icon={link.icon} className='me-2' />
                                        {link.label}
                                    </Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        ))}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default memo(Navbar);