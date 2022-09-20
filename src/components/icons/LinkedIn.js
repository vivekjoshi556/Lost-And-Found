const LinkedIn = (props) => {
    const classes = "dark:fill-[#0072b1] fill-gray-200 " + props.className;
    return (
        <div className = "flex hover:scale-110 duration-200 items-center justify-center dark:bg-gray-100 bg-[#0072b1] rounded-full h-9 w-9 md:w-12 md:h-12 p-3">
            <svg className = { classes } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
        </div>
    );
}

export default LinkedIn;