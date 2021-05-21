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
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.20);
    }
    
`;

export const DashboardContainer = styled.div`
    margin-top: 10px;
    clear: both;
    width: 75%;
    padding-right: 150px;
    padding-left: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const DashboardContainerGrid = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 10px;
    border-bottom: 1px solid ${props => props.theme.gray};
`;

export const DashboardBookingInfo = styled.p`
    padding: 15px 15px;
    font-size: 1rem;
    color: ${props => props.theme.gray};
    font-family: lato, 'sans-serif';
`;