import styled from "styled-components";

export const TextSectionWrapper = styled.div`
    width: 1500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 960px) {
        margin: auto;
        width: 400px;
    }
`;

export const TextSectionContainer = styled.div`
    margin: 150px auto 0 auto;
    width: 500px;
    @media screen and (max-width: 960px) {
        margin-top: 50px;
        width: 400px;
    }
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
    overflow: hidden;

`;

export const TextSectionImage = styled.img`
    margin: 100px auto 0 auto;
    height: 300px;
    width: 500px;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;

    @media screen and (max-width: 960px) {
        height: 250px;
        width: 400px;
        margin-top: 50px;
    }
`;