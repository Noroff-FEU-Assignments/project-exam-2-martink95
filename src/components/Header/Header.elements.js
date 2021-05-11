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
    margin: 0 auto;
    font-size: 3rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: #fff;
    margin-top: 200px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
`;

export const HeaderSearchInput = styled.input`
    padding: 0.75em;
    margin-top: 25px;
    margin-bottom: 5px;
    border: none;
    border-radius: 5px;
    width: 400px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
`;

export const FormCenter = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const HeadingSpan = styled.span`
    font-size: 3rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: ${props => props.theme.blue};
`;

export const HeaderSearchOutput = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    background-color: #fff;
    width: 415px;
    height: 80px;
    margin: 0.15rem auto;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
    cursor: pointer;
    position: relative;
    z-index: 500;
`; 

export const HeaderSearchOutputImage = styled.img`
    height: 80px;
    width: 80px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`; 

export const HeaderSearchOutputTextContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
`;

export const HeaderSearchOutputHotelName = styled.p`
    font-size: 1.15rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: ${props => props.theme.purple};
`;

export const HeaderSearchOutputDescription = styled.p`
    font-size: 1rem;
    font-family: lato, sans-serif;
    color: ${props => props.theme.gray};
`;