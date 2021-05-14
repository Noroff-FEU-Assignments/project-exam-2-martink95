import styled from "styled-components";

export const FormContainer = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContactFormContainer = styled.div`
    margin-top: 150px;
    margin-right: 175px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const LoginButtonContainer = styled.div`
    margin-top: 50px;
    text-align: center;
`;

export const ContactButtonContainer = styled.div`
    margin-top: 10px;
    text-align: right;
`;

export const InputField = styled.input`
    padding: 0.75em;
    margin-bottom: 5px;
    border: 1px solid ${props => props.theme.gray};
    border-radius: 5px;
    width: 400px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.15);

    &:focus {
        outline: none;
        border: 2px solid ${props => props.theme.blue};
    }
`;

export const InputMessage = styled.textarea`
    padding: 0.75em;
    margin-bottom: 5px;
    border: 1px solid ${props => props.theme.gray};
    border-radius: 5px;
    width: 400px;
    height: 150px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.15);
    resize: none;

    &:focus {
        outline: none;
        border: 2px solid ${props => props.theme.blue};
    }
`;

export const LoginFormLogoContainer = styled.div`
    margin-bottom: 35px;
    width: 100%;
`;

export const LoginFormLogo = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: #000;
`;

export const LoginFormLogoSpan = styled.span`
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.theme.blue}
`;