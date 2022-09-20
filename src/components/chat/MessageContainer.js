import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useCallback, useState } from "react";


import SentMsg from "./SentMsg";
import ReceivedMsg from "./ReceivedMsg";
import Loading from "../ui/Loading";
import { AuthContext } from "../contexts/authContext";
import EmptyChatWindow from "./EmptyChatWindow";

//! why is this component loosing values?
const MessageContainer = props => {
    const setChat = props.setChat;
    const authCntxt = useContext(AuthContext);
    const userId = authCntxt.userId;
    const chatIdFromParams = useParams().chatId;
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const scrollToBottom = useCallback(() => {
        const messagesEnd = document.getElementById("messagesEnd");
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }, []);

    //! Better condition here to ensure that single message doesn't get inserted to the chat window.
    const getMessages = async () => {
        const chatDetails = props.chatDetails;
        const chatId = chatDetails.chatId ? chatDetails.chatId : chatIdFromParams;
        if(!chatId)
            return;

        let lastTime = props.chatDetails.lastTime;
        if(!lastTime) {
            if(chatDetails.messages.length !== 0) 
                lastTime = chatDetails.messages[chatDetails.messages.length - 1].createdAt;
        }

        var networkPromise = await fetch(`${process.env.REACT_APP_SERVER_URL}api/v1/chat/getMessage/${chatId}`, {
            method: "POST",
            body: JSON.stringify({
                createdAt: lastTime
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authCntxt.token,
            }
        });
        const data = await networkPromise.json();

        Promise.all([networkPromise]).then(() => {
            if(data.messages.length > 0) {
                if(data.messages[0] > chatDetails.lastTime) {
                    setChat(old => {
                        let newVal = { ...old };
                        newVal.messages.push(...data.messages);
                        newVal.lastTime = data.messages[data.messages.length - 1].createdAt;
                        newVal.chatId = props.chatDetails.chatId;
                        return newVal;
                    });
                    scrollToBottom();
                }
            }
            if(loading)
                setLoading(false);
        });
    }

    useEffect(() => {
        const loop = setInterval(() => {
            getMessages();
        }, 2000);
        
        scrollToBottom();
        
        return (() => { 
            clearInterval(loop);
        })
    });

    useEffect(() => {
        setLoading(true);
    }, [location]);
    
    return (
        <div id = "messages" className = "p-2 overflow-y-scroll flex flex-col" style = {{ "height": "calc(100vh - 200px)" }}>
            {
                loading && 
                <div className = "w-full h-full flex justify-center items-center"> <Loading /> </div>
            }
            {
                !loading && (
                    props.chatDetails && (props.chatDetails.messages.length !== 0 ?
                    props.chatDetails.messages.map((msg, it) => {
                        console.log(msg._id);
                        return msg.from_id === userId
                            ? <SentMsg className = { it === 0 ? "mt-auto" : "" } key = { msg._id }> { msg.message } </SentMsg>
                            : <ReceivedMsg className = { it === 0 ? "mt-auto" : "" } key = { msg._id }> { msg.message }</ReceivedMsg>
                    })
                    // ! This window shows up for split second when chat is changed. Fix this.
                    : <EmptyChatWindow />))
            }
            <div style = {{ float:"left", clear: "both" }} id = "messagesEnd"></div>
        </div>
    );
}

export default MessageContainer;