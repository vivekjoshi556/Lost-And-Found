import { useState, useContext } from "react";

import NavItem from "./NavItem";
import Hamburger from "./Hamburger";
import NavButton from "./NavButton";
import { AuthContext } from "../../contexts/authContext";
import DropDown from "./DropDown";

const Navigation = () => {
    const authCntxt = useContext(AuthContext);
    const [showMenu, toggleMenu] = useState(false);

    const menuToggleHandler = () => {
        toggleMenu(!showMenu)
    }
    const logoutHandler = () =>{
        authCntxt.logout();
    }

    return (
        <>
            <nav className = "flex border fixed shadow-md bg-white rounded duration-300 ease-in-out py-2 dark:bg-midnight-200 theme text-gray-600 dark:text-gray-300 dark:border-gray-700 justify-between items-center px-4 xl:px-10 mx-5" style={{ "zIndex": "26", "marginTop": "10px", "width": "98%", "marginLeft": "1%" }}>
                <a className = "text-2xl leading-none" href="http://localhost/">
                    <img className = "dark:hidden" src="/images/light.png" alt="" width="auto" style= {{"height": "3rem"}} />
                    <img className = "hidden dark:inline" src="/images/dark.png" alt="" width="auto" style= {{"height": "3rem"}} />
                </a>

                <ul className = "lg:ml-auto lg:mr-6 lg:items-center lg:space-x-2 flex justify-center items-center">
                    <li className = "hidden lg:block">
                        <ul className = "lg:ml-auto lg:items-center lg:space-x-12 flex justify-center items-center">
                            <NavItem link = "/">Home</NavItem>
                            { authCntxt.isLoggedIn && <NavItem link = "/chat">Messages</NavItem> }
                            <NavItem link = "/contactUs">Support</NavItem>
                        </ul>
                    </li>
                    {/* <li className = "flex px-4 h-10 justify-center items-center">
                        <LightMode></LightMode>
                    </li> */}
                    <li className = "lg:hidden px-4 h-10 flex justify-center items-center">
                        <Hamburger onClick = { menuToggleHandler }></Hamburger>
                    </li>
                </ul>
                
                <div className = "hidden lg:flex">
                    { !authCntxt.isLoggedIn && <NavButton link = "/login" className = "mr-1">LogIn</NavButton> }
                    { !authCntxt.isLoggedIn && <NavButton link = "/signUp" className = "mx-1">SignUp</NavButton> }
                    { authCntxt.isLoggedIn &&  <DropDown></DropDown> }
                </div>
            </nav>

            {
                showMenu && 
                <div className = "navbar-menu relative z-50 transition" onClick = { menuToggleHandler }>
                    <div className = "navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav className = "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-gray-800 border-r dark:border-gray-700 overflow-y-auto">
                        <div className = "flex items-center mb-8">
                            <a className = "mr-auto text-lg font-semibold leading-none" href="https://phpstack-442692-2074255.cloudwaysapps.com">
                                <img className = "h-7 dark:hidden" src="/images/light.png" alt="" width="auto" style= {{"height": "3rem"}} />
                                <img className = "h-7 hidden dark:inline" src="/images/dark.png" alt="" width="auto" style= {{"height": "3rem"}} />
                            </a>
                            <button className = "navbar-close">
                                <svg className = "h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <NavItem link = "/">Home</NavItem>
                                { authCntxt.isLoggedIn && <NavItem link = "/chat">Messages</NavItem> }
                                <NavItem link = "/contactUs">Support</NavItem>
                                { authCntxt.isLoggedIn && <NavItem onClick = { logoutHandler }>Logout</NavItem> }
                            </ul>
                        </div>
                        <div className = "mt-auto">
                            { !authCntxt.isLoggedIn && <NavButton link = "/login" className = "w-full text-center mb-2">LogIn</NavButton> }
                            { !authCntxt.isLoggedIn && <NavButton link = "/signUp" className = "w-full text-center">SignUp</NavButton> }
                        </div>
                    </nav>
                </div>
            }
        </>
    );
}

export default Navigation;