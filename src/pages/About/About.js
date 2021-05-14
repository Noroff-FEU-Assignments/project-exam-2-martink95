import TextSection from "../../components/TextSection/TextSection"
import FeaturedCard from "../../components/Card/FeaturedCard";
import { aboutInfoObj } from "./data";


export default function Home() {
    return (
    <>
        <TextSection {...aboutInfoObj} />
        <FeaturedCard /> 
    </>
    );
    
}