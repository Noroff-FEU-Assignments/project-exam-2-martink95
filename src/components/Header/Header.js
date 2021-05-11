import {
    HeaderImage,
    HeaderContainer,
    HeaderHeading,
    HeaderSearchInput,
    FormCenter,
    HeadingSpan,
} from "./Header.elements";

export default function Header() {
    return (
        <HeaderImage>
            <HeaderContainer>
                <HeaderHeading>
                    We help you find the best <HeadingSpan>hotels in Bergen.</HeadingSpan>
                </HeaderHeading>
                <FormCenter>
                    <HeaderSearchInput />
                </FormCenter>
            </HeaderContainer>

        </HeaderImage>
    );

}