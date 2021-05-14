import styled from "styled-components";

export const InputField = styled.input`
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