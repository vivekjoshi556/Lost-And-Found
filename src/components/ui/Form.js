import Card from "./Card";

const Form = (props) => {
    const classes = "shadow-md rounded border bg-white px-8 pt-6 pb-8 dark:text-gray-400 dark:bg-gray-800 " + props.className;
 
    return (
        <Card className = { classes }>
            <form onSubmit = { props.submitHandler } encType={props.encType}> { props.children } </form>
        </Card>
    );
}

Card.defaultProps = {
    containsFiles : false,
    encType : "multipart/form-data"
}

export default Form