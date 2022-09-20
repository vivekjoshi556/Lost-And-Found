const Button = (props) => {
    const classes = "flex py-2 px-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 " + props.className;
    return (
        <button onClick={props.onClick} type = { props.type } href="#" className = { classes }>
            { props.children }
        </button>
    );
}

Button.defaultProps = {
    type: "button",
}

export default Button;