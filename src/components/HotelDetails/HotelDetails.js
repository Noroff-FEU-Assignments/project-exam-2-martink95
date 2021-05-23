import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import axios from "axios";

import {
    DetailsContainer,
    HotelSectionContainer,
    HotelInfoContainer,
    HotelImg,
    HotelName,
    HotelAddress,
    HotelDescription,
    HotelPrice
} from "./HotelDetails.elements"
import { FlexCentered } from "../shared/Flex/Flex.elements";
import { BookButton } from "../shared/Button/Button.elements"


export default function HotelDetails() {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const hotelId = new URLSearchParams(window.location.search).get("id");
    console.log(hotelId);

    useEffect(() => {
        axios.get(`${API_URL}/hotels?id=${hotelId}`)
        .then(res => {
            setDetails(res.data[0]);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, []);

    if(!loading) {
        return(
            <div className="booking-container">
                <DetailsContainer>
                    {generateHotelDetails(details)}
                </DetailsContainer>
            </div>
            
        );
    } else {
        return(
            <div className="booking-container">
                <FlexCentered>
                    <div>Loading...</div>
                </FlexCentered>
            </div>
            
        );
    }
}

const generateHotelDetails = (hotelDetails) => {
    console.log(hotelDetails);
    const hotel = hotelDetails;


    return(
        <>
        <FlexCentered>
        <HotelSectionContainer>
            <HotelImg alt={hotel.alternativeText} src={hotel.hotel_images[0].name} />
            <HotelInfoContainer>
                <HotelName>{hotel.hotel_name}</HotelName>
                <HotelAddress>{hotel.hotel_address}</HotelAddress>
                <HotelDescription>{hotel.hotel_description}</HotelDescription>
                <HotelPrice>{hotel.hotel_price} $</HotelPrice>
                <BookButton onClick={() => saveBookingDetails(hotel.id)}>Book Hotel</BookButton>
            </HotelInfoContainer>
        </HotelSectionContainer>
        </FlexCentered>
        </>
    );
}

const saveBookingDetails = (id) => {
    let bookingDetails = {
        id: id,
    }
    localStorage.setItem("booking_details", JSON.stringify(bookingDetails));

    if(localStorage.getItem("booking_details")) {
        if(localStorage.getItem("holidaze_data")) {
            window.location.replace("/booking")
        } else {
            window.location.replace("/login")
        }        
    }
}
