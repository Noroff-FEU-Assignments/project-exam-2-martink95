import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../../constants/api";
import axios from "axios";

import DashboardNav from "./DashboardNav";
import { DashboardContainer } from "./Dashboard.elements";

import {
    ContactFormContainer,
    InputField,
    InputMessage,
    ContactButtonContainer
} from "../Form/Form.elements";
import { FlexCentered } from "../shared/Flex/Flex.elements";

import { Button } from "../shared/Button/Button.elements";

export default function AddHotelSection() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = async data => {
        await sendMessage(data.hotelName, data.subject, data.email, data.message);
    }

    return(
        <>
            <FlexCentered>
                    <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
                    <InputField {...register("hotelName", {
                        required: true,
                        minLength: {
                            value: 3,
                            message: "please fill in hotel name"
                        }
                    })} placeholder="Hotel name" name="hotelName" type="text"/>
                    {errors.hotelName && <span role="alert" className="alert">{errors.hotelName.message}</span>}

                    <InputField {...register("hotelAddress", {
                        required: true,
                        minLength: {
                            value: 3,
                            message: "please fill in hotel address"
                        }
                    })} placeholder="Hotel address" name="hotelAddress" type="text"/>
                    {errors.hotelAddress && <span role="alert" className="alert">{errors.hotelAddress.message}</span>}

                    <InputField {...register("hotelImg", {
                        required: true,
                        minLength: {
                            value: 3,
                            message: "please add hotel image address"
                        }
                    })} placeholder="Hotel image address" name="hotelImg" type="url"/>
                    {errors.hotelImg && <span role="alert" className="alert">{errors.hotelImg.message}</span>}

                    <InputField {...register("hotelPrice", {
                        required: true,
                    })} placeholder="Hotel price" name="hotelPrice" type="number"/>
                    {errors.hotelPrice && <span role="alert" className="alert">{errors.hotelPrice.message}</span>}

                    <InputMessage {...register("description", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "Description is too short"
                        }
                    })} placeholder="Description" name="description" type="text"/>
                    {errors.description && <span role="alert" className="alert">{errors.description.message}</span>}


                    <ContactButtonContainer>
                        <Button>Send</Button>
                    </ContactButtonContainer>
                </ContactFormContainer>
            </FlexCentered>
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