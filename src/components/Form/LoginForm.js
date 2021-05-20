import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API_URL } from "../../constants/api";
import axios from "axios";

import {
    FormContainer,
    InputField,
    LoginButtonContainer,
    LoginFormLogoContainer,
    LoginFormLogo,
    LoginFormLogoSpan,
} from "./Form.elements";

import { Button, PurpleButton } from "../shared/Button/Button.elements";
import { FlexCentered } from "../shared/Flex/Flex.elements"

export default function LoginForm() {
    const { register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = async data => {
        await login(data.email, data.password);
    }

    const history = useHistory();
    if(localStorage.getItem("holidaze_data")) {
        history.push("/dashboard")
    }
    
    

    return (
        <>
        <FlexCentered>      
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                        <LoginFormLogoContainer>
                            <LoginFormLogo>Holidaze<LoginFormLogoSpan>.</LoginFormLogoSpan></LoginFormLogo>
                        </LoginFormLogoContainer>
                        <InputField {...register("email", {
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please enter a valid email"
                            }
                        })} placeholder="E-mail" name="email" type="email"/>
                        {errors.email && <span role="alert" className="alert">{errors.email.message}</span>}
                        <InputField {...register("password", {
                            required: true,
                            minLength: {
                                value: 5,
                                message: "password has to be longer than 5 letters or numbers"
                            }
                        })} placeholder="Password" name="password" type="password"/>
                        {errors.password && <span role="alert" className="alert">{errors.password.message}</span>}
                        <LoginButtonContainer>
                            <Button>Login</Button>
                            <PurpleButton>Register</PurpleButton>
                        </LoginButtonContainer>
                </FormContainer>
        </FlexCentered>
        </>

    );
}

const login = async (email, password) => {
    const url = `${API_URL}/auth/local`;
    const data = {
        identifier: email,
        password: password
    }
    const headers = {
        "Content-Type": "application/json"
    }
    
    axios.post(url, data, headers).then(res => {
        console.log(res.data)
        let holidazeData = {
            token: res.data.jwt,
            user_id: res.data.user.id,
            user_email: res.data.user.email,
            user_type: res.data.user.role.type
        }
        if(res.data) {
            console.log("successful login")
            localStorage.setItem("holidaze_data", JSON.stringify(holidazeData));
        }
    });

}


