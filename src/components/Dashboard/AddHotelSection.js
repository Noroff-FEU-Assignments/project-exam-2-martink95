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
        await sendMessage(data.hotelName, data.hotelAddress, data.hotelImg, data.hotelPrice, data.hotelDescription);
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

                    <InputMessage {...register("hotelDescription", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "Description is too short"
                        }
                    })} placeholder="Description" name="hotelDescription" type="text"/>
                    {errors.hotelDescription && <span role="alert" className="alert">{errors.hotelDescription.message}</span>}


                    <ContactButtonContainer>
                        <Button>Add hotel</Button>
                    </ContactButtonContainer>
                </ContactFormContainer>
            </FlexCentered>
        </>
    );
}


const sendMessage = async (hotelName, hotelAddress, hotelImg, hotelPrice, hotelDescription) => {
    const url = `${API_URL}/hotels`;
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    const token = userInfo.token;

    const data = {
        hotel_name: hotelName,
        hotel_address: hotelAddress,
        hotel_images: hotelImg,
        hotel_price: hotelPrice,
        hotel_description: hotelDescription,
    }

    console.log(data)
    if(userInfo.user.role.type === "admin") {
        axios.post(url, data, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            if(res.data) {
                console.log(res.data)
                console.log("hotel added sent")
            }
        })
        .catch(err => console.log(err));
    }
    

}