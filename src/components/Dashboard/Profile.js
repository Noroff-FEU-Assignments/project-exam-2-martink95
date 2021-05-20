import {
    DashboardNavContainer,
    DashboardContainer,
    DashboardHeading,
    DashboardContainerGrid,
    DashboardBookingInfo
} from "./Dashboard.elements"


import { SignOutDashboardButton, LinkButton, RedButton } from "../shared/Button/Button.elements"

export default function Profile() {
    return(
        <>
            <DashboardNavContainer>
                <DashboardHeading>My bookings</DashboardHeading>
            </DashboardNavContainer>
            <SignOutDashboardButton>Sign out</SignOutDashboardButton>
            <DashboardContainer>
                <DashboardContainerGrid>
                    <DashboardBookingInfo>Cityblox something</DashboardBookingInfo>
                    <DashboardBookingInfo>5005, Bergen</DashboardBookingInfo>
                    <DashboardBookingInfo>2021-05-18</DashboardBookingInfo>
                    <LinkButton to="/">Go to hotel</LinkButton>
                    <RedButton>Cancel</RedButton>
                </DashboardContainerGrid>
                <DashboardContainerGrid>
                    <DashboardBookingInfo>Cityblox something</DashboardBookingInfo>
                    <DashboardBookingInfo>5005, Bergen</DashboardBookingInfo>
                    <DashboardBookingInfo>2021-05-18</DashboardBookingInfo>
                    <LinkButton to="/">Go to hotel</LinkButton>
                    <RedButton>Cancel</RedButton>
                </DashboardContainerGrid>
                <DashboardContainerGrid>
                    <DashboardBookingInfo>Cityblox something</DashboardBookingInfo>
                    <DashboardBookingInfo>5005, Bergen</DashboardBookingInfo>
                    <DashboardBookingInfo>2021-05-18</DashboardBookingInfo>
                    <LinkButton to="/">Go to hotel</LinkButton>
                    <RedButton>Cancel</RedButton>
                </DashboardContainerGrid>
            </DashboardContainer>
        </>
    );
}
