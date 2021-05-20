import {
    DashboardContainer,
    DashboardContainerGrid,
    DashboardBookingInfo,

} from "./Dashboard.elements"

import {RedButton } from "../shared/Button/Button.elements"


export default function BookingSection() {
    return(
        <>
        <DashboardContainer>
                <DashboardContainerGrid>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Hotel name:</span> Cityblox something</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Address:</span> 5005, Bergen</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Date:</span> 2021-05-18</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>E-mail:</span> usertest@holidaze.com</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Booking id:</span> 2</DashboardBookingInfo>
                    <RedButton>Cancel</RedButton>
                </DashboardContainerGrid>
                <DashboardContainerGrid>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Hotel name:</span> Cityblox something</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Address:</span> 5005, Bergen</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Date:</span> 2021-05-18</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>E-mail:</span> usertest@holidaze.com</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Booking id:</span> 2</DashboardBookingInfo>
                    <RedButton>Cancel</RedButton>
                </DashboardContainerGrid>
                <DashboardContainerGrid>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Hotel name:</span> Cityblox something</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Address:</span> 5005, Bergen</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Date:</span> 2021-05-18</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>E-mail:</span> usertest@holidaze.com</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Booking id:</span> 2</DashboardBookingInfo>
                    <RedButton>Cancel</RedButton>
                </DashboardContainerGrid>
                <DashboardContainerGrid>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Hotel name:</span> Cityblox something</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Address:</span> 5005, Bergen</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Date:</span> 2021-05-18</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>E-mail:</span> usertest@holidaze.com</DashboardBookingInfo>
                    <DashboardBookingInfo><span style={{color: "#2574FF" }}>Booking id:</span> 2</DashboardBookingInfo>
                    <RedButton>Cancel</RedButton>
                </DashboardContainerGrid>
            </DashboardContainer>
        </>
    );
}