import styled from "styled-components";
import img from "../../images/Header.jpg"

export const HeaderImage = styled.div`
    width: 100%;
    height: 650px;
    background-image: url(${img});
    background-repeat: no-repeat;
    object-fit: cover;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeaderHeading = styled.h1`
    font-size: 2rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: #fff;
`;

export const HeaderSearchInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: none;
    border-radius: 5px;
    width: 300px;
`;