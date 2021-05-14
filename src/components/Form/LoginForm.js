import {
    FormContainer,
    InputField,
    LoginButtonContainer,
    LoginFormLogoContainer,
    LoginFormLogo,
    LoginFormLogoSpan
} from "./Form.elements";

import { Button, PurpleButton } from "../shared/Button/Button.elements";
import { FlexCentered } from "../shared/Flex/Flex.elements"

export default function LoginForm() {
    return (
        <>
        <FlexCentered>

            
        <FormContainer>
            <FormContainer>
                    <LoginFormLogoContainer>
                        <LoginFormLogo>Holidaze<LoginFormLogoSpan>.</LoginFormLogoSpan></LoginFormLogo>
                    </LoginFormLogoContainer>
                    <InputField placeholder="Username" type="text"/>
                    <InputField placeholder="Password" type="Password"/>
                    <LoginButtonContainer>
                        <Button>Login</Button>
                        <PurpleButton>Register</PurpleButton>
                    </LoginButtonContainer>
            </FormContainer>
        </FormContainer>
        </FlexCentered>
        </>

    );
}