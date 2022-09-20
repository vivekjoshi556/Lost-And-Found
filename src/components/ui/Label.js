const Label = (props) => {
    return (
        <label className = "w-full text-left block text-gray-700 text-sm font-bold mb-2" htmlFor = {props.label}>
            {props.label}
        </label>
    );
}

export default Label