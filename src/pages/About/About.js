import TextSection from "../../components/TextSection/TextSection"
import FeaturedCard from "../../components/Card/FeaturedCard";
import { aboutInfoObj } from "./data";


export default function About() {
    return (
    <>
        <TextSection {...aboutInfoObj} />
        <FeaturedCard /> 
    </>
    );
    
}