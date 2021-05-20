import { SignOutDashboardButton } from "../shared/Button/Button.elements"
import BookingSection from "../../components/Dashboard/BookingSection"
import DashboardNav from "../../components/Dashboard/DashboardNav";

export default function Admin() {
    return(
        <>
            <DashboardNav />
            <BookingSection />
        </>
    );
}