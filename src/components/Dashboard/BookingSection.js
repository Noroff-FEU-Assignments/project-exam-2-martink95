import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import axios from "axios";
import {
    DashboardContainer,
    DashboardContainerGrid,
    DashboardBookingInfo,

} from "./Dashboard.elements"



import { RedButton } from "../shared/Button/Button.elements"


export default function BookingSection() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    const token = userInfo.token;

    useEffect(() => {
        axios.get(`${API_URL}/bookings`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        .then(res => {
            setBookings(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    if(!loading) {
        return (
            <div className="booking-container">
                {generateBookings(bookings)}
            </div>
        );
    } else {
        return (
            <DashboardContainer>
                <p>Loading..</p>
            </DashboardContainer>
        );
    }
/*
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
    */
}


const generateBookings = (bookings) => {
    console.log(bookings)

    const bookingList = bookings.map(booking =>
            <DashboardContainerGrid key={booking.id}>
                <DashboardBookingInfo><span style={{color: "#2574FF" }}>Hotel name:</span> {booking.hotel.hotel_name}</DashboardBookingInfo>
                <DashboardBookingInfo><span style={{color: "#2574FF" }}>Address:</span> {booking.hotel.hotel_address}</DashboardBookingInfo>
                <DashboardBookingInfo><span style={{color: "#2574FF" }}>Date:</span> {formatDate(booking.created_at)}</DashboardBookingInfo>
                <DashboardBookingInfo><span style={{color: "#2574FF" }}>E-mail:</span> {booking.user.email}</DashboardBookingInfo>
                <DashboardBookingInfo><span style={{color: "#2574FF" }}>Booking id:</span> {booking.id}</DashboardBookingInfo>
                <DashboardBookingInfo>
                <RedButton data-id={booking.id} onClick={(e) => cancelBooking(e)}>Cancel</RedButton>
                </DashboardBookingInfo>
            </DashboardContainerGrid>
        );
    
        
    
    return (
        <DashboardContainer>
            { bookingList }
        </DashboardContainer>
    );
}

const formatDate = (date) => {
    let formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
}

const cancelBooking = (btn) => {
    let bookingId = btn.currentTarget.attributes["data-id"].value;
    let confirmed = window.confirm("are you sure you want to cancel this order?")

    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    const token = userInfo.token;
    const userType = userInfo.user_type;
    
    if(confirmed) {
        if(userType === "admin") {
            console.log(token)
            axios.delete(`${API_URL}/bookings/${bookingId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            }).then(res => {
                console.log("Booking deleted");
                window.location.reload();
            })
        }
    } else {
        console.log("not deleted")
    }
}