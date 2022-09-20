import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ChatWith = (props) => {
    const chat = props.chat;
    const user = chat.user2 === null ? chat.user1 : chat.user2;
    const currChat = useParams().chatId;
    const classVal = currChat !== chat._id ? "w-full hover:bg-gray-100 mx-1 p-2 px-3 flex" : "w-full mx-1 bg-blue-50 p-2 px-3 flex";
    const openNewChat = () => {
        props.setChat(old => {
            const newVal = { ...old };
            newVal.userName = user.name;
            newVal.messages = [];
            newVal.chatId = chat._id;
            newVal.lastTime = ""

            return newVal;
        });
    }

    useEffect(() => {
        if(currChat === chat._id)
            openNewChat();
    }, []);
    
    return (
        <Link to = { "/chat/" + chat._id } className = { classVal } onClick = { (e) => {
            if(currChat !== chat._id) {
                openNewChat();
                props.screenHandler();
            }
            else
                e.preventDefault()
        }}>
            <img src = "/images/avatar.png" className = "rounded-full col-span-1 h-12 w-12" alt = "" />
            <div className = "pl-2">
                <div className = "font-semibold capitalize text-left">{ user.name } </div>
                <div className = "text-gray-700 text-left text-xs">Send a Message.</div>
            </div>
        </Link>
    );
}

export default ChatWith;