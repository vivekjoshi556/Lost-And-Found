const SubNav = props => {

    let tabName = props.tabName;
    let switchTab = props.switchTab;
    const tabHandler = (val) => {
        let prev = document.getElementById(tabName);
        let next = document.getElementById(val);
        prev.classList.remove("text-white", "bg-blue-500");
        prev.classList.add("text-blue-500", "bg-white", "dark:text-gray-300", "dark:bg-gray-800");
        
        next.classList.remove("text-blue-500", "bg-white", "dark:text-gray-300", "dark:bg-gray-800");
        next.classList.add("text-white", "bg-blue-500");
        switchTab(val);
    }

    return (
        <ul className = "tab-head flex mb-0 list-none pb-4 flex-col my-4">
            <li className = "mr-2 mb-2 last:mr-0 text-center">
                <button className = "text-xs font-bold uppercase cursor-pointer px-5 py-3 shadow-lg rounded block leading-normal text-white bg-blue-500" onClick = { () => { tabHandler("#home") } } id="#home">
                    <i className = "fa fa-space-shuttle text-base mr-1"></i> Change Profile
                </button>
            </li>
            <li className = "mr-2 mb-2 last:mr-0 text-center">
                <button className = "text-xs font-bold uppercase cursor-pointer px-5 py-3 shadow-lg rounded block leading-normal text-blue-500 bg-white dark:text-gray-300 dark:bg-gray-800" onClick = { () => { tabHandler("#password") } } id="#password">
                    <i className = "fa fa-cog text-base mr-1"></i> Change Password
                </button>
            </li>
        </ul>
    );
}

export default SubNav;