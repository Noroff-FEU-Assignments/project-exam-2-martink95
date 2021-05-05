import React, { useState } from 'react'
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
} from "./Navbar.elements";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Holidaze
                </NavLogo>
                <NavMenuIcon onClick={handleClick}>
                    {click ? <FaTimes size={28} /> : <FaBars size={28} />}
                </NavMenuIcon>
                <NavItems onClick={handleClick} click={click}>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/">
                    About
                </NavLink>
                <NavLink to="/">
                    Hotels
                </NavLink>
                <NavLink to="/">
                    Contact us
                </NavLink>
                <NavLinkButton to="/">
                    Log in
                </NavLinkButton>
                </NavItems>          
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
