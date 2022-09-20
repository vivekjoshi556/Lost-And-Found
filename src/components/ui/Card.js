const Card = (props) => {
    let classes = "m-4 rounded-lg border shadow-md p-8 border-gray-200 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 " + props.className;

    return (
        <div className = { classes }>
            { props.children }
        </div>
    )
}

Card.defaultProps = {
    className: "",
}

export default Card;