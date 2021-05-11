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
    text-align: center;
`;

export const HeaderHeading = styled.h1`
    width: 450px;
    margin: 0 auto;
    font-size: 3rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: #fff;
    margin-top: 200px;
`;

export const HeaderSearchInput = styled.input`
    padding: 0.75em;
    margin-top: 25px;
    border: none;
    border-radius: 5px;
    width: 400px;
`;

export const FormCenter = styled.div`
    align-content: center;
`;

export const HeadingSpan = styled.span`
    font-size: 3rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: ${props => props.theme.blue}
`;