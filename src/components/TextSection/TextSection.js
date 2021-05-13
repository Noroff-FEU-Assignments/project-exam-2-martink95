import {
    TextSectionWrapper,
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
                <TextSectionWrapper>
                <TextSectionContainer>
                    <TextSectionHeading>Why Bergen?</TextSectionHeading>
                    <TextSectionParagraph>
                    Section paragraph with some long text.
                    This section is a small information part for the
                    visitor to read.

                    Section paragraph with some long text.
                    This section is a small information part for the
                    visitor to read.
                    </TextSectionParagraph>

                    <TextSectionParagraph>
                    Section paragraph with some long text.
                    This section is a small information part for the
                    visitor to read.

                    Section paragraph with some long text.
                    This section is a small information part for the
                    visitor to read.
                    </TextSectionParagraph>
                </TextSectionContainer>
                <TextSectionImage src={img}/>
                </TextSectionWrapper>
            </FlexRowCentered>
        </>
    );
}