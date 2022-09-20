import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useContext, useEffect } from "react";

import MessageContainer from "./MessageContainer";
import { AuthContext } from "../contexts/authContext";
import { useParams } from "react-router";

const ChatWindow = props => {
    const setChat = props.setChat;
    const chatId = useParams().chatId;
    const authCntxt = useContext(AuthContext);

    useEffect(() => {
        setChat(old => {
            old.chatId = chatId;
            return old;
        })
    //! Added these dependencies.
    }, [chatId, setChat])

    const scrollToBottom = useCallback(() => {
        const messagesEnd = document.getElementById("messagesEnd");
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }, []);

    //! Handle Errors.
    const messageHandler = async (e) => {
        const msg = e.target.value;
        e.target.value = "";

        scrollToBottom();

        if(!chatId)
            return;
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}api/v1/chat/sendMessage/${chatId}`, {
            method: "POST",
            body: JSON.stringify({
                message: msg
            }),
            headers: { 
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + authCntxt.token 
            }
        })

        const data = await response.json();
        setChat(old => {
            let newVal = {...old};
            newVal.messages.push(data.msg);
            newVal.lastTime = data.msg.createdAt;
            newVal.chatId = old.chatId;
            return newVal;
        });
        console.log(props);
    }

    return (
        <div id = "chatWindow" className = "w-full hidden relative md:block" style = {{ "height": "calc(100vh - 96px)" }}>
            <div className = "border-y border-gray-200 bg-white p-2 px-3 flex items-center justify-between sticky top-0">
                <div className = "flex items-center">
                    <button onClick = { props.screenHandler } className = "md:hidden block">
                        <FontAwesomeIcon className = "text-gray-600 w-6 pr-1 dark:text-gray-300" icon = { faArrowLeft }></FontAwesomeIcon>
                    </button>
                    <img src = "/images/avatar.png" className = "rounded-full col-span-1 h-12 w-12" alt = "Lost" />
                    <div className = "pl-2 font-semibold">
                        <span className = "capitalize">{ props.chat.userName }</span>
                    </div>
                </div>
                <button onClick = { props.screenHandler } className = "mr-2">
                    <FontAwesomeIcon className = "text-gray-600 w-6 pr-1 dark:text-gray-300" icon= { faPhone } />
                </button>
            </div>
            {
                chatId && <MessageContainer chatDetails = { props.chat } setChat = { setChat } />
            }
            <div className = "absolute bottom-0 left-0 w-full">
                <div className = "relative w-full">
                    <div className = "relative">
                        <input 
                            type = "text"
                            className = "outline-none focus:shadow-md border-2 rounded-lg w-full p-3 leading-tight border-gray-300 dark:border-gray-600 bg-gray-50 focus:outline-none focus:bg-white text-gray-700 pr-16 js-password duration-300 dark:bg-gray-700 text-sm dark:text-gray-200" 
                            placeholder = "Enter your Message."
                            onKeyPress = {(e) => { if(e.key === "Enter") { messageHandler(e) } }}
                            autoFocus
                        />
                        <div className = "absolute cursor-pointer inset-y-0 right-0 px-3 flex items-center text-sm border-l-0 leading-5 border-gray-300 dark:bg-gray-700 dark:text-gray-200 border dark:border-gray-600 bg-gray-100">
                            <span> 
                                <FontAwesomeIcon className = "text-gray-600 w-6 dark:text-gray-300" icon = { faPaperPlane }></FontAwesomeIcon> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatWindow;