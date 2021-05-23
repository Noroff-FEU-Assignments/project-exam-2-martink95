import styled from "styled-components";
import img from "../../images/Header.jpg"

export const HeaderImage = styled.div`
    width: 100%;
    height: 625px;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const HeaderHeading = styled.h1`
    width: 500px;
    margin: 0 auto 15px auto;
    font-size: 3rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: #fff;
    margin-top: 200px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.25);

    @media screen and (max-width: 960px) {
        font-size: 2rem;
        width: 300px;
    }

`;

export const HeadingSpan = styled.span`
    font-size: 3rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: ${props => props.theme.blue};

    @media screen and (max-width: 960px) {
        font-size: 2rem;
    }
`;

export const HeaderSearchInput = styled.input`
    padding: 0.75em;
    margin-top: 25px;
    margin-bottom: 5px;
    border: none;
    border-radius: 5px;
    width: 400px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.25);

    &:focus {
        outline: none;
        border: 2px solid ${props => props.theme.blue};
    }
`;

export const FormCenter = styled.div`
    width: 100%;
    margin: 0 auto;
`;