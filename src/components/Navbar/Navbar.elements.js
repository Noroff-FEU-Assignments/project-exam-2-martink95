import styled from "styled-components"
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    background: none;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-right: 50px;
    padding-left: 50px;
    background-color: ${props => props.theme.purple};

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px; 
    }
`;

export const NavLogo = styled(Link)`
    margin-top: 20px;
    color: #fff;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;

`;

export const NavLink = styled(Link)`
    display: block;
    padding: 0.5rem 0.5rem;
    text-align: center;
    padding-right: 2rem;
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;

    @media screen and (max-width: 960px) {
        margin-top: 20px;
        padding: 0;
    }
`;

export const NavLinkButton = styled(NavLink)`
    display: block;
    border-radius: 10px;
    font-size: 1.2rem;
    color: #fff;
    height: 25px;
    width: 100px;
    text-decoration: none;
    background-color: ${props => props.theme.blue};
    padding: 0.5rem 0.5rem;

    @media screen and (max-width: 960px) {
        position: absolute;
        left: 50%;
        top: 185px;
        transform: translateX(-50%);
        padding: 0;
    }
`;

export const NavItems = styled.div`
    margin-top: 15px;
    display: flex;
    
    @media screen and (max-width: 960px) {
        margin-top: 5px;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 60px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: ${props => props.theme.purple};
    }
`;

export const NavMenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
    }
`;

export const LogoSpan = styled.span`
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    color: ${props => props.theme.blue}
`;