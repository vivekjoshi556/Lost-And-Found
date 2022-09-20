const SentMsg = (props) => {
    const classes = "w-fit max-w-xs bg-blue-500 text-white text-sm p-2 mb-2 ml-auto px-3 rounded-md " + props.className;
    return (
        <div className = { classes }>
            { props.children }
        </div>
    );
}

export default SentMsg;