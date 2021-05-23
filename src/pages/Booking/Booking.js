import CheckOut from "../../components/CheckOut/CheckOut";

export default function Booking() {
    return (
    <>
        {getUser()} 
    </>
    ); 
}

const getUser = () => {
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    const bookingInfo = JSON.parse(localStorage.getItem("booking_details"));
    if(userInfo) {
        if(bookingInfo) {
            return <CheckOut />;
        } else {
            window.location.replace("/hotels")
        }
    } else {
        window.location.replace("/login");
    }
}