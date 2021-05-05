import {
    CardGrid,
    CardContent,
    CardImage,
    CardWrapper,
    CardHeading,
    CardAddress,
    CardDescription,
    CardPrice
} from "./Card.elements";
import {CardButton} from "../Button/Button.elements"


export default function Card() {
    return (
        <CardWrapper>
            <CardGrid>

            <CardImage alt="Some image" src="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            <CardContent>
                <CardHeading>Hotel Norge by Scandic</CardHeading>
                <CardAddress>Nedre Ole Bulls plass 4, 5012 Bergen</CardAddress>
                <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi</CardDescription>
                <CardPrice>799 NOK</CardPrice>
                <CardButton>Book Hotel</CardButton>
            </CardContent>
            </CardGrid>
        </CardWrapper>
    )
}