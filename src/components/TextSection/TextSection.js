import {
    TextSectionWrapper,
    TextSectionContainer,
    TextSectionHeading,
    TextSectionParagraph,
    TextSectionImage,

} from "./TextSection.elements"

import  {FlexCentered}  from "../shared/Flex/Flex.elements";

export default function TextSection({ heading, paragraph, img }) {

    let paragraphItems = [];
    if(Array.isArray(paragraph)) {
        for(let i=0; i < paragraph.length; i++) {
            paragraphItems.push(<TextSectionParagraph key={paragraph+i}>{paragraph[i]}</TextSectionParagraph>)
        }
    } else {
        paragraphItems = <TextSectionParagraph>{paragraph}</TextSectionParagraph>;
    }
    

    return (
        <>
            <FlexCentered>
                <TextSectionWrapper>
                <TextSectionContainer>
                    <TextSectionHeading>{heading}</TextSectionHeading>
                    {paragraphItems}

                </TextSectionContainer>
                <TextSectionImage src={img}/>
                </TextSectionWrapper>
            </FlexCentered>
        </>
    );
}