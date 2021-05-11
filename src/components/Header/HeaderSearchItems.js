import {
    HeaderSearchOutput,
    HeaderSearchOutputImage,
    HeaderSearchOutputTextContainer,
    HeaderSearchOutputHotelName,
    HeaderSearchOutputDescription
} from "./Header.elements";
import hotelImg from "../../images/hotel-room.jpg"

export default function HeaderSearchItems() {
    return(
        <>
            <HeaderSearchOutput>
                <HeaderSearchOutputImage src={getImage()}/>
                <HeaderSearchOutputTextContainer>
                    <HeaderSearchOutputHotelName>Hotel Norge by Scandic</HeaderSearchOutputHotelName>
                    <HeaderSearchOutputDescription>Some description about this hotel goes here</HeaderSearchOutputDescription>
                </HeaderSearchOutputTextContainer>
            </HeaderSearchOutput>

            <HeaderSearchOutput>
                <HeaderSearchOutputImage src={getImage()}/>
                <HeaderSearchOutputTextContainer>
                    <HeaderSearchOutputHotelName>Hotel Norge by Scandic</HeaderSearchOutputHotelName>
                    <HeaderSearchOutputDescription>Some description about this hotel goes here</HeaderSearchOutputDescription>
                </HeaderSearchOutputTextContainer>
            </HeaderSearchOutput>

            <HeaderSearchOutput>
                <HeaderSearchOutputImage src={getImage()}/>
                <HeaderSearchOutputTextContainer>
                    <HeaderSearchOutputHotelName>Hotel Norge by Scandic</HeaderSearchOutputHotelName>
                    <HeaderSearchOutputDescription>Some description about this hotel goes here</HeaderSearchOutputDescription>
                </HeaderSearchOutputTextContainer>
            </HeaderSearchOutput>
            
            <HeaderSearchOutput>
                <HeaderSearchOutputImage src={getImage()}/>
                <HeaderSearchOutputTextContainer>
                    <HeaderSearchOutputHotelName>Hotel Norge by Scandic</HeaderSearchOutputHotelName>
                    <HeaderSearchOutputDescription>Some description about this hotel goes here
                    maybe even a longer description that planned, to test if the text could fall outside the parent div
                    </HeaderSearchOutputDescription>
                </HeaderSearchOutputTextContainer>
            </HeaderSearchOutput>
            
            
        </>
    );
}

const getImage = () => {
    return hotelImg;  
}