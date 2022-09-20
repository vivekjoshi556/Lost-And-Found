import { useState, useEffect } from "react";

const LightMode = () => {
    const [lightMode, changeLightMode] = useState(true);

    useEffect(() => {
        const storedMode = localStorage.getItem('dark');
        if(storedMode === "true") {
            (function() {changeLightMode(oldMode => !oldMode)}());
            document.body.classList.add("dark");
        }
    }, []);

    // True means dark mode is on.
    const lightModeHandler = () => {
        changeLightMode(!lightMode);
        if(lightMode) {
            document.body.classList.add("dark");
            localStorage.setItem('dark', true);
        }
        else {
            document.body.classList.remove("dark");
            localStorage.setItem('dark', false);
        }
    }

    return (
        <button className = "rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Toggle color mode" type = "button" onClick = { lightModeHandler }>           
            { lightMode ? (
                    <svg className = "text-gray-800 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                ) :
                (
                    <svg className = "text-gray-200  w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                    </svg>
                )

            }
        </button>
    );
}

export default LightMode;