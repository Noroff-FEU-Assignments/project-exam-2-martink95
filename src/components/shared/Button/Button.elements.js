import styled from "styled-components";


export const Button = styled.button`
border-radius: 10px;
background-color: ${props => props.theme.blue};
color: #fff;
padding: 14px 25px;
font-size: 16px;
outline: none;
cursor: pointer;
border: none;
transition: transform .2s ease;
&:hover{
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
}
&:active{
    box-shadow: inset 2px 2px 10px rgba(0,0,0,0.25);
}
`;

export const RedButton = styled(Button)`
    background-color: ${props => props.theme.red};
`;

export const CardButton = styled(Button)`
    border-radius: 0px;
    padding: 10px 15px;
`
