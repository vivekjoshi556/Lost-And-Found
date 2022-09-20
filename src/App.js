import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ChatIndex from "./components/chat/ChatIndex";
import NotFound from "./components/errors/NotFound";
import LoginIndex from "./components/login/LoginIndex";
import SignupIndex from "./components/signup/SignupIndex";
import Navigation from "./components/layout/navbar/NavIndex";
import ProfileIndex from "./components/profile/ProfileIndex";
import ContactIndex from "./components/contactUs/ContactIndex";
import { AuthContext } from "./components/contexts/authContext";
import HomepageIndex from "./components/feed/HomepageIndex";

const App = () =>  {
    const authCntxt = useContext(AuthContext);

    return (
        <>
            <Navigation></Navigation>
            <Routes>
                <Route path = "/" element = { <HomepageIndex /> } />
                <Route path = "/contactUs" element = { <ContactIndex /> } />
                <Route path = "/signUp" element = { !authCntxt.isLoggedIn ? <SignupIndex /> : <Navigate to = "/" /> } />
                <Route path = "/login" element = { !authCntxt.isLoggedIn ? <LoginIndex /> : <Navigate to = "/" /> } />
                <Route path = "/profile" element = { authCntxt.isLoggedIn ? <ProfileIndex /> : <Navigate to = "/login" /> } />
                <Route path="chat">
                    <Route path="" element={ authCntxt.isLoggedIn ? <ChatIndex /> : <Navigate to = "/login" /> } />
                    <Route path=":chatId" element={ authCntxt.isLoggedIn ? <ChatIndex /> : <Navigate to = "/login" /> } />
                </Route>
                <Route path = "*" element = { <NotFound /> }></Route>
            </Routes>
        </>
    );
}

export default App;