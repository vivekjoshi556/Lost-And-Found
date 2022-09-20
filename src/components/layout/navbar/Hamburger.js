const Hamburger = props => {
    return (
        <button className = "navbar-burger duration-75 ease-in-out flex items-center rounded focus:outline-none relative top-px" onClick = { props.onClick }>
            <svg className = "block h-4 w-4  dark:text-gray-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
    );
};

export default Hamburger;