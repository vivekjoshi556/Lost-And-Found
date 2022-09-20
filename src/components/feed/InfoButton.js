const InfoButton = (props) => {
    return (
        <button type = "button" href = "#" className = "py-2 h-fit px-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
            { props.children }
        </button>
    );
}

export default InfoButton;
