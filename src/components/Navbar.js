    // Navbar.js
    import React, { useEffect, useState } from 'react';
    import styled from 'styled-components';

    const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true); // Change state when scrolled more than 50px
        } else {
            setScrolling(false); // Reset state when at the top
        }
        };

        window.addEventListener('scroll', handleScroll); // Attach scroll event listener

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Nav scrolling={scrolling}>
        <Logo scrolling={scrolling}>IMVANZ</Logo>
        <NavLinks>
            <NavLink scrolling={scrolling} href="#">AR Catalogue</NavLink>
            <NavLink scrolling={scrolling} href="#">About Us</NavLink>
            <NavLink scrolling={scrolling} href="#">Marketplace</NavLink>
            <NavLink scrolling={scrolling} href="#">Create with Us</NavLink>
        </NavLinks>
        <ConnectButton>Login</ConnectButton>
        </Nav>
    );
    };

    export default Navbar;

    // Styled Components
    const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    padding-left: 1rem; /* Additional padding on the left */
    background: rgba(0, 0, 0, 0.2); /* Light transparent background */
    backdrop-filter: blur(10px); /* Adds a blur effect for a frosted glass look */
    position: fixed;
    width: 100%;
    z-index: 10;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
    transition: background-color 0.3s; /* Smooth transition for background color */
    background-color: ${props => (props.scrolling ? '#000' : 'rgba(0, 0, 0, 0.2)')}; /* Change to black when scrolling */
    `;

    const Logo = styled.div`
    font-size: 1.8rem;
    color: ${props => (props.scrolling ? '#fff' : '#00e0ff')}; /* Change color to white when scrolling */
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0 0 1px #00e0ff, 0 0 1px #00e0ff, 0 0 5px #00e0ff; /* Neon glow effect */
    cursor: pointer;
    `;

    const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    `;

    const NavLink = styled.a`
    color: ${props => (props.scrolling ? '#fff' : 'white')}; /* Change link color to white when scrolling */
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #00e0ff;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background: rgba(255, 255, 255, 0.1);

    &:hover {
        color: #00e0ff;
        box-shadow: 0px 0px 10px #00e0ff;
        background: rgba(0, 0, 0, 0.7);
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(0, 224, 255, 0.3), transparent);
        transition: all 0.5s ease;
        z-index: -1;
    }

    &:hover::before {
        left: 100%;
    }
    `;

    const ConnectButton = styled.button`
    background: linear-gradient(135deg, #00e0ff, #007bff);
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 10px rgba(0, 224, 255, 0.7), 0px 0px 20px rgba(0, 123, 255, 0.5);

    &:hover {
        background: linear-gradient(135deg, #007bff, #00e0ff);
        box-shadow: 0px 0px 15px rgba(0, 224, 255, 1), 0px 0px 25px rgba(0, 123, 255, 0.7);
    }
    `;
