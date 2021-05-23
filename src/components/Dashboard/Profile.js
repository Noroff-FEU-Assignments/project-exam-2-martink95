import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import axios from "axios";

import {
    DashboardNavContainer,
    DashboardContainer,
    DashboardHeading,
    DashboardContainerGrid,
    DashboardBookingInfo
} from "./Dashboard.elements"


import { SignOutDashboardButton, LinkButton, RedButton } from "../shared/Button/Button.elements"
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Profile() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    console.log(userInfo)
    const token = userInfo.token;

    useEffect(() => {
        axios.get(`${API_URL}/bookings/?user.id=${userInfo.user.id}`, {
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
            <>
            <DashboardNavContainer>
                <DashboardHeading>My bookings</DashboardHeading> 
                <SignOutDashboardButton onClick={logOut}>Sign out</SignOutDashboardButton>
            </DashboardNavContainer>
            <DashboardContainer>
            <IconContext.Provider value={{ color: "#272755" }}>
                <a href="/booking">
                    <FaShoppingCart size={24} style={{ margin: "15px 0 0 0" }}/>
                </a>
            </IconContext.Provider>
            </DashboardContainer>
            
            <div className="dashboard-container">
                {generateBookings(bookings)}
            </div>
            </>
        );
    } else {
        return (
            <>
            <DashboardNavContainer>
                <DashboardHeading>My bookings</DashboardHeading>     
                <SignOutDashboardButton onClick={logOut}>Sign out</SignOutDashboardButton>
            </DashboardNavContainer>
            <div className="dashboard-container">
                <DashboardContainer>
                    <p>Loading..</p>
                </DashboardContainer>
            </div>
            </>
        );
    }

}

const logOut = () => {
    localStorage.removeItem("holidaze_data");
    window.location.replace("/login")
}

const generateBookings = (bookings) => {
    console.log(bookings)

    const bookingList = bookings.map(booking =>
            <DashboardContainerGrid key={booking.id}>
                <DashboardBookingInfo><span style={{color: "#2574FF" }}>Hotel name:</span> {booking.hotel.hotel_name}</DashboardBookingInfo>
                <DashboardBookingInfo><span style={{color: "#2574FF" }}>Address:</span> {booking.hotel.hotel_address}</DashboardBookingInfo>
                <DashboardBookingInfo><span style={{color: "#2574FF" }}>Date:</span> {formatDate(booking.created_at)}</DashboardBookingInfo>
                <LinkButton to={`/hotels/details?id=${booking.hotel.id}`}>Go to hotel</LinkButton>
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