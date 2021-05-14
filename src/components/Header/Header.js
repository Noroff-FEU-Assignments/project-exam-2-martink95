import {
    HeaderImage,
    HeaderContainer,
    HeaderHeading,
    HeaderSearchInput,
    FormCenter,
    HeadingSpan,
} from "./Header.elements";

import HeaderSearchItems from "./HeaderSearchItems";

export default function Header({heading, headingSpan}) {
    return (
        <HeaderImage>
            <HeaderContainer>
                <HeaderHeading>{heading}<HeadingSpan>{headingSpan}</HeadingSpan></HeaderHeading>
                <FormCenter>
                    <HeaderSearchInput placeholder="Search for hotels" />
                    {getSearchItem()}
                </FormCenter>
            </HeaderContainer>
        </HeaderImage>
    );

}

function getSearchItem() {
    //find a way to get the search input then return the "most likely match" hotel.
    return <HeaderSearchItems />
}