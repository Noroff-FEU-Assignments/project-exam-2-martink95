import {
    DashboardContainer,
} from "./Dashboard.elements"

import DashboardNav from "./DashboardNav";

export default function MessageSection() {
    return(
        <>
            <DashboardNav />
            <DashboardContainer>
            <p>Something</p>
            </DashboardContainer>
        </>
    );
}