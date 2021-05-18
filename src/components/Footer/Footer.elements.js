import styled from "styled-components";
import { Link } from "react-router-dom";


export const FooterContainer = styled.footer`
    margin-top: 125px;
    width: 100%;
    padding-bottom: 50px;
    margin-bottom: 0;
    background-color: ${props => props.theme.purple};
    display: flex;
    justify-content: center;

    @media screen and (max-width: 960px) {
        margin-top: 75px;
    }
`;

export const FooterGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 1500px;
    justify-content: center;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        
    }
`;

export const FooterLogo = styled(Link)`
    margin: 70px auto 0 auto;
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    font-family: paralucent, lato, 'sans-serif';
`;

export const FooterLogoSpan = styled(FooterLogo)`
    color: ${props => props.theme.blue};
`;

export const FooterNavContainer = styled.div`
    margin: 70px auto 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        margin-top: 25px;
    }
`;

export const FooterNavLink = styled(Link)`
    display: block;
    padding: 0.5rem 0.5rem;
    text-align: center;
    padding-right: 2rem;
    font-size: 1rem;
    color: #fff;
    text-decoration: none;

`;

export const FooterInfo = styled.p`
    margin: 60px auto 0 auto;
    font-size: 1rem;
    color: #fff;

    @media screen and (max-width: 960px) {
        margin-top: 25px;
    }
`;



