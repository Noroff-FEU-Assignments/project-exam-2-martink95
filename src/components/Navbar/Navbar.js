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
    LogoSpan,
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
                            Holidaze<LogoSpan>.</LogoSpan>
                        </NavLogo>
                        <NavMenuIcon onClick={handleClick}>
                            {click ? <FaTimes size={28} /> : <FaBars size={28} />}
                        </NavMenuIcon>
                        <NavItems onClick={handleClick} click={click}>
                            <NavLink to="/">
                                Home
                </NavLink>
                            <NavLink to="/About">
                                About
                </NavLink>
                            <NavLink to="/Hotels">
                                Hotels
                </NavLink>
                            <NavLink to="/Contact">
                                Contact us
                </NavLink>
                            <NavLinkButton to="/Login">
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
