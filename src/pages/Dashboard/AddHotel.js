import AddHotelSection from "../../components/Dashboard/AddHotelSection";

export default function AddHotel() {
    return (
    <>
        {getUserType()}      
    </>
    );
    
}

const getUserType = () => {
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    const userType = userInfo.user.role.type;
    console.log(userType);

    if(userType === "admin") {
        return (
            <>
                <AddHotelSection />
            </>
        );
    } else {
        window.location.replace("/")
    }
}