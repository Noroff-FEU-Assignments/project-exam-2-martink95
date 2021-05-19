import styled from "styled-components";

export const CardsContainer = styled.div`
    margin-top: 50px;
    width: 1320px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1341px) {
        width: 880px;
    }
    @media screen and (max-width: 960px) {
        width: 400px;
    }
`;

export const CardsContainerGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;


export const CardGrid = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.20);
    width: 400px;
    padding: 0 0 20px 0;
    &:hover {
        box-shadow: 3px 3px 6px rgba(0,0,0,0.25)
    }
`;

export const CardImage = styled.img`
    width: 400px;
    height: 225px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    width: 90%;
    padding: 20px;
    
`;

export const CardWrapper = styled.div`
    flex: 1;
    margin: 15px;
`;

export const CardHeading = styled.h2`
    width: 350px;
    font-size: 1.5rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: ${props => props.theme.purple};
`;

export const CardAddress = styled.p`
    width: 350px;
    overflow: hidden;
    font-size: 1rem;
    color: ${props => props.theme.gray};
    margin-bottom: 1.25rem;
`;

export const CardDescription = styled.p`
    margin-bottom: 1.5rem;
    font-size: 1rem;
    width: 350px;
    overflow: hidden;
    height: 100px;
    color: ${props => props.theme.gray};
`;

export const CardPrice = styled.p`
    width: 100px;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.blue}
`;