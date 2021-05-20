import MessageSection from "../../components/Dashboard/MessageSection";

export default function Messages() {
    return (
    <>
        {getUserType()}      
    </>
    );
    
}

const getUserType = () => {
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    const userType = userInfo.user_type;
    console.log(userType);

    if(userType === "admin") {
        return (
            <>
                <MessageSection />
            </>
        );
    } else {
        
        
        
    }
}