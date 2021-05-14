import FeaturedCards from "../../components/Card/FeaturedCard";
import Header from "../../components/Header/Header";
import TextSection from "../../components/TextSection/TextSection"

import {
  headerObj,
  infoObj,
} from "./data"

export default function Home() {
    return (
    <>
      <Header {...headerObj} />
      <FeaturedCards/>
      <TextSection {...infoObj}/>
    </>
    );
    
}