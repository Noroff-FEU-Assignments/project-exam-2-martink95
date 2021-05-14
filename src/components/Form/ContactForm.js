import {
    ContactFormContainer,
    InputField,
    InputMessage,
    ContactButtonContainer
} from "./Form.elements";

import {
    TextSectionWrapper,
    TextSectionContainer,
    TextSectionHeading,
    TextSectionParagraph,
} from "../TextSection/TextSection.elements";

import { FlexCentered } from "../shared/Flex/Flex.elements";

import { Button } from "../shared/Button/Button.elements";

import FeaturedCards from "../Card/FeaturedCard";

export default function ContactForm() {
    return(
        <>
            <FlexCentered>
                <TextSectionWrapper>
                    <TextSectionContainer>
                        <TextSectionHeading>Contact us</TextSectionHeading>
                        <TextSectionParagraph>
                            If you have any questions please use our contact form to reach out to us!
                            We will answer as soon as possible
                        </TextSectionParagraph>
                        <TextSectionParagraph>
                            You can also call us on +47 500 55 005
                        </TextSectionParagraph>
                    </TextSectionContainer>

                    <ContactFormContainer>
                    <InputField placeholder="First name" type="text"/>
                    <InputField placeholder="Subject" type="text"/>
                    <InputField placeholder="E-mail" type="email"/>
                    <InputMessage />
                    <ContactButtonContainer>
                        <Button>Send</Button>
                    </ContactButtonContainer>
                </ContactFormContainer>
                </TextSectionWrapper>
            </FlexCentered>
            <FeaturedCards />
        </>
    );
}