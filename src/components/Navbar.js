    // Navbar.js
    import React, { useEffect, useState } from 'react';
    import styled from 'styled-components';

    const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true); 
        } else {
            setScrolling(false); 
        }
        };

        window.addEventListener('scroll', handleScroll); 

   
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

  
    const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    padding-left: 1rem;
    background: rgba(0, 0, 0, 0.2); 
    backdrop-filter: blur(10px); 
    position: fixed;
    width: 100%;
    z-index: 10;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); 
    transition: background-color 0.3s; 
    background-color: ${props => (props.scrolling ? '#000' : 'rgba(0, 0, 0, 0.2)')};

    const Logo = styled.div`
    font-size: 1.8rem;
    color: ${props => (props.scrolling ? '#fff' : '#00e0ff')}; 
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0 0 1px #00e0ff, 0 0 1px #00e0ff, 0 0 5px #00e0ff;
    cursor: pointer;
    `;

    const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    `;

    const NavLink = styled.a`
    color: ${props => (props.scrolling ? '#fff' : 'white')}; 
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
