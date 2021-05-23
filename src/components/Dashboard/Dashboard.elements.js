import styled from "styled-components";
import { Link } from "react-router-dom"

export const DashboardNavContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
`;

export const DashboardNavLinkContainer = styled.div`
    float: left;
    margin-left: 150px;
    margin-top: 12.5px;
`;

export const DashboardHeading = styled.h1`
    float: left;
    margin-left: 150px;
    font-size: 2.5rem;
    font-family: paralucent, lato, 'sans-serif';
    color: ${props => props.theme.purple};
    font-weight: 700;
`;

export const DashboardNavLink = styled(Link)`
    margin-right: 25px;
    color: ${props => props.theme.gray};
    text-decoration: none;
    font-size: 1.25rem;
    font-family: lato, 'sans-serif';
    font-weight: 500;
    
    &:hover {
        color: ${props => props.theme.blue};
    }
    
`;

export const DashboardContainer = styled.div`
    margin-top: 10px;
    box-sizing: border-box;
    clear: both;
    width: 100%;
    padding-right: 150px;
    padding-left: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 960px) {
        padding: 0;
        margin: 0 auto;
        width: 165px;
    }
`;

export const DashboardContainerGrid = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 10px;
    border-bottom: 1px solid ${props => props.theme.gray};

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const DashboardBookingInfo = styled.p`
    padding: 15px 5px;
    width: 150px;
    overflow: hidden;
    overflow-wrap: break-word;
    font-size: 1rem;
    color: ${props => props.theme.gray};
    font-family: lato, 'sans-serif';
`;

export const MessageContainerGrid = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 10px;
    border-bottom: 1px solid ${props => props.theme.gray};

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const MessageInfo = styled.div`
    padding: 15px 5px;
    width: 150px;
    overflow: hidden;
    overflow-wrap: break-word;
    font-size: 1rem;
    color: ${props => props.theme.gray};
    font-family: lato, 'sans-serif';
`;


export const MessageMsg = styled.div`
    padding: 15px 5px;
    width: 300px;
    overflow: hidden;
    overflow-wrap: break-word;
    font-size: 1rem;
    color: ${props => props.theme.gray};
    font-family: lato, 'sans-serif';
    @media screen and (max-width: 960px) {
        width: 175px;
    }
`;