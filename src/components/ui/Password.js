import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import Label from './Label'
import React, { useState } from 'react';

const Password = (props) => {
    const [display, setDisplay] = useState(false);
    let className1 = "relative w-full mb-4 " + props.className1;
    
    const passVisibilityHandler = () => {
        setDisplay(!display);
    };

    return (
        <div className = { className1 }>
            { props.showLabel && <Label label = { props.label }></Label> }
            <div className = "mb-2 relative">
                <div className = "relative">
                    <input 
                        type = { display ? "text" : "password" } 
                        className = "outline-none focus:shadow-md border-2 rounded w-full p-3 leading-tight border-gray-300 dark:border-gray-600 bg-gray-50 focus:outline-none focus:bg-white text-gray-700 pr-16 js-password duration-300 dark:bg-gray-700 text-sm dark:text-gray-200" 
                        id="password" 
                        placeholder = { props.label } 
                        onChange={props.onChange}
                        name = { props.name } 
                    />
                    <div className = "absolute cursor-pointer inset-y-0 right-0 px-3 flex items-center text-sm border-l-0 leading-5 border-gray-300 dark:bg-gray-700 dark:text-gray-200 border dark:border-gray-600 bg-gray-100" onClick = {passVisibilityHandler}>
                        { display && <span> <FontAwesomeIcon className = "text-gray-600 dark:text-gray-300" icon = { faEyeSlash }></FontAwesomeIcon> </span> }
                        { !display && <span> <FontAwesomeIcon className = "text-gray-600 dark:text-gray-300" icon = { faEye }></FontAwesomeIcon> </span> }
                    </div>
                </div>
            </div>
        </div>
    );
}

Password.defaultProps = {
    showLabel: false,
    display: false,
    label: "Enter Password",
};

export default Password