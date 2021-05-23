import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import axios from "axios";

import {
    DashboardContainer,
    MessageContainerGrid,
    MessageInfo,
    MessageMsg
} from "./Dashboard.elements"

import DashboardNav from "./DashboardNav";

export default function MessageSection() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const userInfo = JSON.parse(localStorage.getItem("holidaze_data"));
    

    useEffect(() => {
        axios.get(`${API_URL}/messages`, {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`,
            }
        })
        .then(res => {
            setMessages(res.data);
            setLoading(false);
        })
        .catch(err => console.log(`error: ${err}`))
    }, []);

    if(!loading) {
        console.log(messages)
        return (
            <>
            <DashboardNav />
            <div className="dashboard-container">
                {generateMessages(messages)}
            </div>
            </>
        );
        
    } else {
        return(
            <>
            <DashboardNav />
            <DashboardContainer>
                <p>Loading...</p>
            </DashboardContainer>
            </>
        );
    }
}

const generateMessages = (messages) => {
    console.log("messages: " + messages)

    const messageList = messages.map(message => 
            <MessageContainerGrid key={message.id}>
                <MessageInfo><span style={{color: "#2574FF" }}>Message id: </span>{message.id}</MessageInfo>
                <MessageInfo><span style={{color: "#2574FF" }}>Name: </span>{message.name}</MessageInfo>
                <MessageInfo><span style={{color: "#2574FF" }}>E-mail: </span>{message.email_address}</MessageInfo>
                <MessageInfo><span style={{color: "#2574FF" }}>Subject: </span>{message.subject}</MessageInfo>
                <MessageMsg><span style={{color: "#2574FF" }}>Message: </span>{message.message}</MessageMsg>
            
            </MessageContainerGrid>
        );

        return(
            <DashboardContainer>
                { messageList }
            </DashboardContainer>
        );
}