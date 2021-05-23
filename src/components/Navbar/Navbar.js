import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib"
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavLink,
    NavLinkButton,
    NavItems,
    NavMenuIcon,
    LogoSpan,
} from "./Navbar.elements";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [loginStatus, setLoginStatus] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    useEffect(() => {
        if(userInfo) {
            if(userInfo.token) {
                setLoginStatus(true);  
            }
        } 
    }, [])
    

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            Holidaze<LogoSpan>.</LogoSpan>
                        </NavLogo>
                        <NavMenuIcon onClick={handleClick}>
                            {click ? <FaTimes size={28} /> : <FaBars size={28} />}
                        </NavMenuIcon>
                        <NavItems onClick={handleClick} click={click}>
                            <NavLink to="/">
                                Home
                            </NavLink>
                            <NavLink to="/about">
                                About
                            </NavLink>
                            <NavLink to="/hotels">
                                Hotels
                            </NavLink>
                            <NavLink to="/contact">
                                Contact us
                            </NavLink>
                            {isLoggedIn(loginStatus)}
                        </NavItems>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

const isLoggedIn = (status) => {
    if(status) {
        return (
            <NavLinkButton to="/dashboard">
                Dashboard
            </NavLinkButton>   
        );
    } else {
        return (
            <NavLinkButton to="/login">
                Log in
            </NavLinkButton>
        );
    }
}

export default Navbar
