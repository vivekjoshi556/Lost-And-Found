import { React, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const DropDown = () => {
    console.log("DropDown Render");
    const authCntxt = useContext(AuthContext);
    const [showMenu, toggleMenu] = useState(false);
    const btnRef = useRef();
    const menuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if(showMenu && e.path[0] !== menuRef.current && e.path[0] !== btnRef.current)
                toggleMenu(false);
        }

        if(showMenu) document.addEventListener("click", closeDropDown);
        else document.removeEventListener("click", closeDropDown);
    });

    return (
        <>
            <button ref = { btnRef } className = "inline-block w-10 h-10 text-sm leading-normal border-gray-200 border rounded-full ml-4 bg-center shadow-sm bg-no-repeat bg-contain cursor-pointer" style = {{ "backgroundImage": "url('/images/vivek.png')" }} onClick = { () => { toggleMenu(showMenu => !showMenu) }}></button>
            {
                showMenu && 
                <div id = "profileMenu" ref = { menuRef } className = "absolute focus:bg-gray-200 top-12 right-3 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 border border-gray-100">

                    <Link to = "/profile" className = "flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <div className = "inline-block w-10 h-10 mx-1 border-gray-100 border rounded-full bg-center bg-no-repeat bg-contain" style = {{ "backgroundImage": "url('/images/vivek.png')" }}></div>
                        <div className = "mx-1">
                            <h1 className = "text-sm font-semibold text-gray-700 dark:text-gray-200">{ authCntxt.username }</h1>
                            <p className = "text-sm text-gray-500 dark:text-gray-400">{ authCntxt.email }</p>
                        </div>
                    </Link>

                    <hr className = "border-gray-200 dark:border-gray-700 " />

                    <button onClick={ () => { authCntxt.logout() } } className = "flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform w-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className = "w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                        </svg>

                        <span className = "mx-1">
                            Lost Items
                        </span>
                    </button>


                    <button onClick={ () => { authCntxt.logout() } } className = "flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform w-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className = "w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                        </svg>

                        <span className = "mx-1">
                            Found Items
                        </span>
                    </button>

                    <hr className = "border-gray-200 dark:border-gray-700 " />
                    
                    <button onClick={ () => { authCntxt.logout() } } className = "flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform w-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className = "w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                        </svg>

                        <span className = "mx-1">
                            Sign Out
                        </span>
                    </button>
                </div>
            }
        </>
    );
};

export default DropDown;