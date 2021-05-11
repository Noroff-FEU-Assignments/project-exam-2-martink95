import styled from "styled-components";

export const TextSectionContainer = styled.div`
    margin-top: 150px;
    width: 600px;
    margin-right: 100px;
`;

export const TextSectionHeading = styled.h2`
    margin-bottom: 10px;
    font-family: paralucent, lato, 'sans-serif';
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.theme.purple};
`;

export const TextSectionParagraph = styled.p`
    margin-bottom: 10px;
    width: 100%;
    font-size: 1rem;
    color: ${props => props.theme.gray};
`;

export const TextSectionImage = styled.img`
    margin-top: 100px;
    height: 300px;
    width: 500px;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
`;