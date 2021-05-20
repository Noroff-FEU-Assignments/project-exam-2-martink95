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
                <SignOutDashboardButton>Sign out</SignOutDashboardButton>
            </DashboardNavContainer>
        </>
    );
}