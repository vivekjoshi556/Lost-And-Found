import { Link } from 'react-router-dom';

const NavButton = props => {
    let classes = "inline-block py-3 px-8 text-sm leading-normal font-medium rounded bg-blue-500 dark:text-gray-300 dark:hover:text-white bg-indigo-50 hover:bg-indigo-200 transition duration-200 " + props.className;
    
    return (
        <Link onClick = { props.onClick } className = { classes } to = { props.link }>
            { props.children }
        </Link>
    );
}

NavButton.defaultProps = {
    link: "#",
    children: "Please send a link through `txt` property.",
}

export default NavButton;