const ChatPulse = (props) => {
    return (
        <button className = "w-full border-y border-gray-200 animate-pulse p-2 px-3 flex">
            <div className = "rounded-full bg-gray-300 col-span-1 h-12 w-12" alt = ""></div>
            <div className = "pl-2">
                <div className = "w-28 mt-2 bg-gray-300 rounded h-3 mb-1"></div>
                <div className = "w-24 h-3 rounded bg-gray-300"></div>
            </div>
        </button>
    );
}

export default ChatPulse;