import { useState, createContext } from "react";

export const AuthContext = createContext({
    token: "",
    isLoggedIn: false,
    userId: "",
    email: "",
    username: "",
    login: (token, userId, email, username) => {},
    logout: () => {},
});

export const AuthContextProvider = props => {
    const initialToken = localStorage.getItem("token");
    let userId = localStorage.getItem("user_id");
    let username = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token, user_id, email, username) => {
        setToken(token);
        userId = user_id;
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
    }

    const logoutHandler = () => {
        setToken(null);
        userId = "";
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler, 
        logout: logoutHandler,
        userId: userId,
        username: username,
        email: email
    };

    return (
        <AuthContext.Provider value = { contextValue }> { props.children } </AuthContext.Provider>
    );
};