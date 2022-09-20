import { useState, useEffect, useCallback, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import ChatPulse from "./ChatPulse";
import ChatWith from "./ChatWith";
import EmptyList from "./EmptyList";

const ChatList = props => {
    // console.log("ChatList render");
    const setChat = props.setChat;
    const ChatCount = [1, 2, 3, 4, 5];
    const authCntxt = useContext(AuthContext);
    const [loadingList, setLoadingList] = useState(true);
    const [chatList, setChatsList] = useState([]);

    const fetchChatList = useCallback(async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}api/v1/chat/getChatList`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authCntxt.token,
            }
        });
        
        let data = await response.json();
        setChatsList(data.chats);
        setLoadingList(false);
    }, [authCntxt]);

    useEffect(() => {
        fetchChatList();
    }, [fetchChatList]);

    return (
        <div id = "chatList" className = "md:block md:w-96 w-full duration-300 overflow-y-scroll overflow-x-hidden" style = {{ "height": "calc(100vh - 96px)" }}>
            { !loadingList && (
                    chatList.length === 0 ? <EmptyList /> : chatList.map(chat => {
                        return <ChatWith screenHandler = { props.screenHandler } chat = { chat } key = { chat._id } setChat = { setChat }></ChatWith>
                    })
                )
            }
            {
                loadingList && ChatCount.map(chat => <ChatPulse key = { chat } />)
            }
        </div>
    );
}

export default ChatList;