import {
    FooterContainer,
    FooterGrid,
    FooterLogo,
    FooterLogoSpan,
    FooterNavContainer,
    FooterNavLink,
    FooterInfo,
} from "./Footer.elements";

export default function Footer() {
    return(
        <>
            <FooterContainer>
                <FooterGrid>
                    <FooterLogo to="/">
                        Holidaze<FooterLogoSpan>.</FooterLogoSpan>
                    </FooterLogo>
                    <FooterNavContainer>
                        <FooterNavLink to="/">Home</FooterNavLink>
                        <FooterNavLink to="/">About</FooterNavLink>
                        <FooterNavLink to="/">Hotels</FooterNavLink>
                        <FooterNavLink to="/">Contact us</FooterNavLink>
                    </FooterNavContainer>
                    <FooterInfo>
                        5005 Bergen, Norway. <br/>
                        +47 500 55 005<br/>
                        Contact@holidaze.com 
                    </FooterInfo>
                    
                </FooterGrid>
            </FooterContainer>
        </>
    );
}