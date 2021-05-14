import styled from "styled-components";


export const Button = styled.button`

background-color: ${props => props.theme.blue};
color: #fff;
padding: 15px 25px;
font-size: 16px;
outline: none;
cursor: pointer;
border: none;
transition: transform .2s ease;
&:hover{
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
}
&:active{
    box-shadow: inset 2px 2px 6px rgba(0,0,0,0.10);
}
`;

export const RedButton = styled(Button)`
    background-color: ${props => props.theme.red};
`;

export const PurpleButton = styled(Button)`
    background-color: ${props => props.theme.purple};
`;

export const CardButton = styled(Button)`
    border-radius: 0px;
    padding: 10px 15px;
`

