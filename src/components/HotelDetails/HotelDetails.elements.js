import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const HotelSectionContainer = styled.div`
    margin-top: 125px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;
export const HotelInfoContainer = styled.div`
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1250px) {
        margin-left: 50px;
    }
    @media screen and (max-width: 960px) {
        margin: 25px auto;
    }
`;

export const HotelImg = styled.img`
    width: 600px;
    height: 350px;
    object-fit: cover;

    @media screen and (max-width: 1250px) {
        width: 500px;
        height: 275px;
    }
    @media screen and (max-width: 960px) {
        width: 400px;
        height: 200px;
    }

`;

export const HotelName = styled.h1`
    color: ${props => props.theme.purple};
    font-size: 2rem;
    font-family: paralucent, lato, 'sans-serif';
    font-weight: 700;
`;
export const HotelParagraph = styled.p`
    font-family: lato, 'sans-serif';
    font-size: 1rem;
    color: ${props => props.theme.gray};
    width: 500px;
    overflow: hidden;

    @media screen and (max-width: 1250px) {
        width: 350px;
    }
`;


export const HotelAddress = styled(HotelParagraph)`
    font-style: italic;
`;

export const HotelDescription = styled(HotelParagraph)`
    margin-top: 20px;
`;

export const HotelPrice = styled.p`
    margin-top: 20px;
    margin-bottom: 50px;
    color: ${props => props.theme.blue};
    font-size: 1.25rem;
    font-family: lato, 'sans-serif';
`;