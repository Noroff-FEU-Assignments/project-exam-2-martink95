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
import {LinkButton, CardButton} from "../shared/Button/Button.elements"




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
    console.log(hotels)
    if(!loading) {
        return (
            generateCards(hotels)  
          );
    } else  {
        return <div>Loading..</div>
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
    return (
        <>
        <CardWrapper>
                <CardGrid>
                    <CardImage alt="Some image" src={hotels[0].hotel_images[0].name}/>
                    <CardContent>
                        <CardHeading>{hotels[0].hotel_name}</CardHeading>
                        <CardAddress>{hotels[0].hotel_address}</CardAddress>
                        <CardDescription>{hotels[0].hotel_description}</CardDescription>
                        <CardPrice>{hotels[0].hotel_price} $</CardPrice>
                        <LinkButton to={`/hotel/${hotels[0].id}`}>Book Hotel</LinkButton>
                    </CardContent>
                </CardGrid>
            </CardWrapper>
            <CardWrapper>
                <CardGrid>
                    <CardImage alt="Some image" src={hotels[1].hotel_images[0].name}/>
                    <CardContent>
                        <CardHeading>{hotels[1].hotel_name}</CardHeading>
                        <CardAddress>{hotels[1].hotel_address}</CardAddress>
                        <CardDescription>{hotels[1].hotel_description}</CardDescription>
                        <CardPrice>{hotels[1].hotel_price} $</CardPrice>
                        <LinkButton to={`/hotel/${hotels[1].id}`}>Book Hotel</LinkButton>
                    </CardContent>
                </CardGrid>
            </CardWrapper>

            <CardWrapper>
            <CardGrid>
                <CardImage alt="Some image" src={hotels[2].hotel_images[0].name}/>
                <CardContent>
                    <CardHeading>{hotels[2].hotel_name}</CardHeading>
                    <CardAddress>{hotels[2].hotel_address}</CardAddress>
                    <CardDescription>{hotels[2].hotel_description}</CardDescription>
                    <CardPrice>{hotels[2].hotel_price} $</CardPrice>
                    <LinkButton to={`/hotel/${hotels[2].id}`}>Book Hotel</LinkButton>
                </CardContent>
            </CardGrid>
            </CardWrapper>
        </>
    );
};