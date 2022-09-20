const ReceivedMsg = (props) => {
    const classes = "max-w-xs w-fit text-sm bg-gray-200 p-2 mb-2 px-3 rounded-md " + props.className
    return (
        <div className = { classes }>
            { props.children }
        </div>
    );
}

export default ReceivedMsg;