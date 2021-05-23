import { useForm } from "react-hook-form";
import { API_URL } from "../../constants/api";
import { useEffect, useState } from "react"
import axios from "axios";

import {
    DashboardContainerGrid,
    DashboardBookingInfo,

} from "../Dashboard/Dashboard.elements"

import {
    ContactFormContainer,
} from "../Form/Form.elements";

import { Button } from "../shared/Button/Button.elements"
import { FlexCentered } from "../shared/Flex/Flex.elements";

export default function CheckOut() {
    const [hotel, setHotel] = useState([]);
    const [loading, setLoading] = useState(true);
    const bookingId = JSON.parse(localStorage.getItem("booking_details")).id;

    useEffect(() => {
        axios.get(`${API_URL}/hotels?id=${bookingId}`)
        .then(res => {
            setHotel(res.data[0]);
            setLoading(false);
        })
        .catch(err => {
            console.log(err)
        })

    }, []);

    const {handleSubmit} = useForm();
    const onSubmit = async data => {
        await bookHotel(hotel);
    }

    if(!loading) {
        return (
            <div className="booking-container">
                <FlexCentered>
                    <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
                        <DashboardContainerGrid>
                            <DashboardBookingInfo><span style={{color: "#2574FF" }}>Hotel name: </span>{hotel.hotel_name}</DashboardBookingInfo>
                            <DashboardBookingInfo><span style={{color: "#2574FF" }}>Address: </span>{hotel.hotel_address}</DashboardBookingInfo>
                            <DashboardBookingInfo><span style={{color: "#2574FF" }}>Price: </span>{hotel.hotel_price}$</DashboardBookingInfo>
                        </DashboardContainerGrid>
                        <Button>Checkout</Button>
                    </ContactFormContainer>
                </FlexCentered>
            </div>
        );
    } else {
        return(
            <FlexCentered>
                <p>Loading...</p>
            </FlexCentered>
        );
    }

}

const bookHotel = (hotel) => {

    let confirmed = window.confirm("Are you sure you want to book this hotel?")

    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    console.log(userInfo);

    const data = {
        hotel: hotel,
        user: userInfo.user
    }

    if(confirmed) {  
        axios.post(`${API_URL}/bookings`, data, {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`,
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

        console.log("booked")
        window.alert("booking confirmed")


    } 
}
