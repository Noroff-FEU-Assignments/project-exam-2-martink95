import {
    HeaderImage,
    HeaderContainer,
    HeaderHeading,
    HeaderSearchInput,
} from "./Header.elements";

export default function Header() {
    return (
        <HeaderImage>
            <HeaderContainer>
                <HeaderHeading>
                    Holidaze heading
                </HeaderHeading>
                <HeaderSearchInput />
            </HeaderContainer>

        </HeaderImage>
    );

}