import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/api";

import {
    CardGrid,
    CardContent,
    CardImage,
    CardWrapper,
    CardHeading,
    CardAddress,
    CardDescription,
    CardPrice,
    CardsContainer,
    CardsContainerGrid
} from "./Card.elements";
import {LinkButton} from "../shared/Button/Button.elements"
import {FlexCentered} from "../shared/Flex/Flex.elements";

export default function HotelCards() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}/hotels`)
        .then(res => {
            setHotels(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    console.log(hotels);

    if(!loading) {
        return(
            generateHotelCards(hotels)
        );
    } else {
        return (
            <FlexCentered>
                <p>Loading...</p>
            </FlexCentered> 
        );
    }

}

const generateHotelCards = (hotels) => {

    const cards = hotels.map(hotel =>
        <CardWrapper key={hotel.id}>
                <CardGrid>
                <CardImage alt="Some image" src={hotel.hotel_images[0].name}/>
                <CardContent>
                    <CardHeading>{hotel.hotel_name}</CardHeading>
                    <CardAddress>{hotel.hotel_address}</CardAddress>
                    <CardDescription>{hotel.hotel_description}</CardDescription>
                    <CardPrice>{hotel.hotel_price} $</CardPrice>
                    <LinkButton to={`/hotel/${hotel.id}`}>Book Hotel</LinkButton>
                </CardContent>
                </CardGrid>
            </CardWrapper>
    );
    return(
        <FlexCentered>
            <CardsContainer>
                <CardsContainerGrid>
                    { cards }
                </CardsContainerGrid>
            </CardsContainer>
        </FlexCentered>
    );
}