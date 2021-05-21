import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled.button`

background-color: ${props => props.theme.blue};
color: #fff;
padding: 15px 25px;
font-size: 1rem;
font-family: lato, 'sans-serif';
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
    margin-top: 15px;
    margin-bottom: 10px;
    width: 100px;
    height: 50px;
    background-color: ${props => props.theme.red};
`;

export const SignOutDashboardButton = styled(Button)`
    background-color: ${props => props.theme.red};
    float: right;
    margin-right: 150px;

    @media screen and (max-width: 720px) {
        margin-right: 10px;
    }
`;

export const PurpleButton = styled(Button)`
    background-color: ${props => props.theme.purple};
`;

export const CardButton = styled(Button)`
    border-radius: 0px;
    padding: 10px 15px;
`
export const LinkButton = styled(Link)`
    background-color: ${props => props.theme.blue};
    text-decoration: none;
    border-radius: 0px;
    color: #fff;
    padding: 15px 25px;
    font-family: lato, 'sans-serif';
    font-size: 1rem;
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
