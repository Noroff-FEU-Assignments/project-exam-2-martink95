import styled from "styled-components";

export const FlexRowCentered = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;