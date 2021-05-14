import {
    InputField,
} from "./Form.elements";

import { FlexCenteredColumn } from "../shared/Flex/Flex.elements"

export default function ContactForm() {
    return(
        <>
            <FlexCenteredColumn>
                <InputField placeholder="First name"/>
                <InputField placeholder="Subject"/>
                <InputField placeholder="Email"/>
            </FlexCenteredColumn>
        </>
    );
}