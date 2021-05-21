import {
    DashboardNavContainer,
    DashboardNavLink,
    DashboardNavLinkContainer,

} from "./Dashboard.elements"

import { SignOutDashboardButton } from "../shared/Button/Button.elements"

export default function DashboardNav() {
    return(
        <>
            <DashboardNavContainer>
                <DashboardNavLinkContainer>
                    <DashboardNavLink to="/dashboard" activeStyle={{ color: "#049f34" }}>Bookings</DashboardNavLink>
                    <DashboardNavLink to="/dashboard/messages">Messages</DashboardNavLink>
                </DashboardNavLinkContainer>
                <SignOutDashboardButton onClick={logOut}>Sign out</SignOutDashboardButton>
            </DashboardNavContainer>
        </>
    );
}

const logOut = () => {
    localStorage.removeItem("holidaze_data");
    window.location.replace("/login")
}