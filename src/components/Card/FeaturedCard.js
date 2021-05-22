import { useState, useEffect } from "react";
import axios from "axios";
import {API_URL} from "../../constants/api";

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
import {FlexCentered} from "../shared/Flex/Flex.elements"
import {LinkButton} from "../shared/Button/Button.elements"




export default function FeaturedCards() {
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
    if(!loading) {
        return (
            generateCards(hotels)  
          );
    } else  {
        return (
            <FlexCentered>
                <div>Loading..</div>
            </FlexCentered>
            
        );
    }
    
}

const generateCards = (hotels) =>  {
        return (
            <FlexCentered>
                <CardsContainer>
                    <CardsContainerGrid>
                        {generateHotelCards(hotels)}
                    </CardsContainerGrid>
                </CardsContainer>
            </FlexCentered>
        );
    
}


const generateHotelCards = (hotels) => {
    let hotelOne = Math.floor(Math.random() * hotels.length);
    let hotelTwo = Math.floor(Math.random() * hotels.length);
    let hotelThree = Math.floor(Math.random() * hotels.length);
    
    while(hotelOne === hotelTwo) {
        hotelTwo = Math.floor(Math.random() * hotels.length)
    }
    while(hotelThree === hotelTwo || hotelThree === hotelOne) {
        hotelThree = Math.floor(Math.random() * hotels.length)
    }

    return (
        <>
        <CardWrapper>
                <CardGrid>
                    <CardImage alt="Some image" src={hotels[hotelOne].hotel_images[0].name}/>
                    <CardContent>
                        <CardHeading>{hotels[hotelOne].hotel_name}</CardHeading>
                        <CardAddress>{hotels[hotelOne].hotel_address}</CardAddress>
                        <CardDescription>{hotels[hotelOne].hotel_description}</CardDescription>
                        <CardPrice>{hotels[hotelOne].hotel_price} $</CardPrice>
                        <LinkButton to={`/hotels/details?id=${hotels[hotelOne].id}`}>Book Hotel</LinkButton>
                    </CardContent>
                </CardGrid>
            </CardWrapper>
            <CardWrapper>
                <CardGrid>
                    <CardImage alt="Some image" src={hotels[hotelTwo].hotel_images[0].name}/>
                    <CardContent>
                        <CardHeading>{hotels[hotelTwo].hotel_name}</CardHeading>
                        <CardAddress>{hotels[hotelTwo].hotel_address}</CardAddress>
                        <CardDescription>{hotels[hotelTwo].hotel_description}</CardDescription>
                        <CardPrice>{hotels[hotelTwo].hotel_price} $</CardPrice>
                        <LinkButton to={`/hotels/details?id=${hotels[hotelTwo].id}`}>Book Hotel</LinkButton>
                    </CardContent>
                </CardGrid>
            </CardWrapper>

            <CardWrapper>
            <CardGrid>
                <CardImage alt="Some image" src={hotels[hotelThree].hotel_images[0].name}/>
                <CardContent>
                    <CardHeading>{hotels[hotelThree].hotel_name}</CardHeading>
                    <CardAddress>{hotels[hotelThree].hotel_address}</CardAddress>
                    <CardDescription>{hotels[hotelThree].hotel_description}</CardDescription>
                    <CardPrice>{hotels[hotelThree].hotel_price} $</CardPrice>
                    <LinkButton to={`/hotels/details?id=${hotels[hotelThree].id}`}>Book Hotel</LinkButton>
                </CardContent>
            </CardGrid>
            </CardWrapper>
        </>
    );
};