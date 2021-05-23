import Profile from "../../components/Dashboard/Profile"
import Admin from "../../components/Dashboard/Admin"

export default function Dashboard() {
    return (
    <>
        {getUserType()}
    </>
    );
    
}

const getUserType = () => {
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    let userType = ""
    if(userInfo) {
        userType = userInfo.user.role.type;
        console.log(userType);
        if(userType === "admin") {
            return <Admin />;
        } else {
            return <Profile />;
        }
    } else {
        window.location.replace("/login");
    }
}