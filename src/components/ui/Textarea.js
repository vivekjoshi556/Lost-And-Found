import Label from './Label'

const Textarea = (props) => {
    return (
        <div className = "mb-4">
            { props.showLabel && <Label label = {props.label}></Label> }
            <textarea type = "text" placeholder = { props.placeholder } className = "outline-none focus:shadow-md border-2 rounded w-full py-2 px-2 leading-tight border-gray-200 dark:border-gray-600 bg-gray-50 focus:outline-none focus:bg-white text-gray-700 duration-300 dark:bg-gray-700 text-sm dark:text-gray-300" id = { props.label } rows = { props.row } name = { props.name }></textarea>
        </div>
    );
}

Textarea.defaultProps = {
    showLabel: false,
    row: "8",
}

export default Textarea