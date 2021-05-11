import {
    HeaderImage,
    HeaderContainer,
    HeaderHeading,
    HeaderSearchInput,
    FormCenter,
    HeadingSpan,
} from "./Header.elements";

import HeaderSearchItems from "./HeaderSearchItems";

export default function Header() {
    return (
        <HeaderImage>
            <HeaderContainer>
                <HeaderHeading>
                    We help you find the best <HeadingSpan>hotels in Bergen.</HeadingSpan>
                </HeaderHeading>
                <FormCenter>
                    <HeaderSearchInput placeholder="Search for hotels" />
                    <HeaderSearchItems>
                    </HeaderSearchItems>
                </FormCenter>
            </HeaderContainer>

        </HeaderImage>
    );

}