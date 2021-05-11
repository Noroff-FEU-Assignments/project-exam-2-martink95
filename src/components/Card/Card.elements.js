import styled from "styled-components";

export const CardsContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CardGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardImage = styled.img`
    width: 400px;
    height: 225px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    width: 100%;
    padding: 20px;
`;

export const CardWrapper = styled.div`
    margin: 15px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.10);
    width: 400px;
    padding: 0 0 20px 0;
    
    &:hover {
        box-shadow: 3px 3px 6px rgba(0,0,0,0.15)
    }
`;

export const CardHeading = styled.h2`
    font-size: 1.5rem;
    font-family: paralucent, lato, sans-serif;
    font-weight: 700;
    color: ${props => props.theme.purple};
`;

export const CardAddress = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.gray};
    margin-bottom: 1.25rem;
`;

export const CardDescription = styled.p`
    margin-bottom: 1.5rem;
    font-size: 1rem;
    width: 350px;
    height: 100px;
    color: ${props => props.theme.gray};
`;

export const CardPrice = styled.p`
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.blue}
`;