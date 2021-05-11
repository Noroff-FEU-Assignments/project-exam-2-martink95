import {
    TextSectionContainer,
    TextSectionHeading,
    TextSectionParagraph,
    TextSectionImage,

} from "./TextSection.elements"

import { FlexRowCentered } from "../shared/Flex/Flex.elements";

import img from "../../images/Header.jpg"


export default function TextSection() {
    return (
        <>
            <FlexRowCentered>
                <TextSectionContainer>
                    <TextSectionHeading>Some Heading</TextSectionHeading>
                    <TextSectionParagraph>
                        Some paragraph with some containing text to describe what the site is about maybe?
                        or some more text to describe something else, maybe why they should use the website?
                    </TextSectionParagraph>

                    <TextSectionParagraph>
                        Some paragraph with some containing text to describe what the site is about maybe?
                        or some more text to describe something else, maybe why they should use the website?
                        Or even maybe some longer text than the text before just to check how it works.
                    </TextSectionParagraph>

                </TextSectionContainer>
                <TextSectionImage src={img}/>
            </FlexRowCentered>
        </>
    );
}