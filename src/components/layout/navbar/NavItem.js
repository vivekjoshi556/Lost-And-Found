import { Link } from 'react-router-dom';

const NavItem = props => {
    return (
        <li className = "lg:flex">
            <Link onClick = { props.onClick } className = "block p-4 uppercase text-sm font-medium text-gray-900 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-indigo-100 hover:bg-gray-50 hover:text-indigo-500 rounded" to = { props.link }> 
                { props.children }
            </Link>
        </li>
    );
}

NavItem.defaultProps = {
    link: "#",
    children: "Please set link for this nav item.",
}

export default NavItem;