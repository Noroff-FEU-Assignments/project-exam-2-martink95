import { useForm } from "react-hook-form";
import { API_URL } from "../../constants/api";
import axios from "axios";

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
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = async data => {
        await sendMessage(data.firstName, data.subject, data.email, data.message);
    }

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

                    <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
                    <InputField {...register("firstName", {
                        required: true,
                        minLength: {
                            value: 1,
                            message: "please fill in your name"
                        }
                    })} placeholder="First name" name="firstName" type="text"/>
                    {errors.firstName && <span role="alert" className="alert">{errors.firstName.message}</span>}

                    <InputField {...register("subject", {
                        required: true,
                        minLength: {
                            value: 2,
                            message: "please fill in subject"
                        }
                    })} placeholder="Subject" name="subject" type="text"/>
                    {errors.subject && <span role="alert" className="alert">{errors.subject.message}</span>}

                    <InputField {...register("email", {
                        required: true,
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter a valid email"
                        }
                    })} placeholder="E-mail" name="email" type="email"/>
                    {errors.email && <span role="alert" className="alert">{errors.email.message}</span>}

                    <InputMessage {...register("message", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "Message is too short"
                        }
                    })} placeholder="Message" name="message" type="text"/>
                    {errors.message && <span role="alert" className="alert">{errors.message.message}</span>}

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


const sendMessage = async (firstName, subject, email, message) => {
    const url = `${API_URL}/messages`;
    const data = {
        name: firstName,
        subject: subject,
        email_address: email,
        message: message
    }

    console.log(data)
    
    const headers = {
        "Content-Type": "application/json"
    }

    axios.post(url, data, headers).then(res => {
        if(res.data) {
            console.log(res.data)
            console.log("message sent")
        }
    })
    .catch(err => console.log(err));

}
