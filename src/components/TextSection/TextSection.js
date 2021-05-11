import {
    TextSectionContainer,
    TextSectionHeading,
    TextSectionParagraph
} from "./TextSection.elements"


export default function TextSection() {
    return (
        <>
            <TextSectionContainer>
                <TextSectionHeading>Some Heading</TextSectionHeading>
                <TextSectionParagraph>
                    Some paragraph with some containing text to describe what the site is about maybe?
                    or some more text to describe something else, maybe why they should use the website?
                </TextSectionParagraph>
            </TextSectionContainer>
        </>
    );
}