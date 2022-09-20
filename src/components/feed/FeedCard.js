import InfoButton from "./InfoButton";

const FeedCard = () => {
    return (
        <div className = "mx-auto border border-gray-100 dark:border-midnight-200 bg-white dark:bg-midnight-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full">
            <div className = "md:flex justify-around">
                <div className = "p-4 w-full">
                    <div className = "uppercase tracking-wide text-indigo-500 font-semibold">
                        Lost Phone
                    </div>

                    <div>
                        <div>
                            <span className = "text-sm dark:text-gray-300 bold">Reported By: </span>
                            <span className = "text-sm dark:text-gray-300 text-semibold">Vivek Joshi</span>
                        </div>
                        
                        <div>
                            <span className = "text-sm dark:text-gray-300 bold">Location: </span> 
                            <span className = "text-sm dark:text-gray-300 text-semibold">221b Baker Street</span>
                        </div>
                    </div>
                    <div className = "flex justify-between items-center mt-2">
                        <span className = "dark:bg-midnight-200 dark:text-midnight-50 my-auto px-4 text-sm text-gray-700 py-2 bg-gray-300 rounded-3xl">
                            Lost 
                        </span>
                        <InfoButton>More Info</InfoButton>
                    </div>
                </div>
                <div className = "md:shrink-0">
                    <div className = "text-xs text-gray-500 dark:text-100 h-1/6 w-full text-right px-4 pt-2">Lost on: 28 March, 2022</div>
                    <div className = "flex items-center justify-center h-5/6">
                        <img className = "h-30 px-4 pb-4 pt-1 w-full object-cover md:w-20" src="/images/Signup.png" alt="Man looking at item at a store" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;