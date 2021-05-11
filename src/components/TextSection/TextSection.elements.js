import styled from "styled-components";

export const TextSectionContainer = styled.div`
    width: 100%
`;

export const TextSectionHeading = styled.h2`
    font-family: paralucent, lato, 'sans-serif';
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.purple};
`;

export const TextSectionParagraph = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.gray}
`;