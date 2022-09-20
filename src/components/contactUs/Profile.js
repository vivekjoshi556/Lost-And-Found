import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";

const Profile = (props) => {
    return (
    <div className = { "flex flex-col items-center " + props.colSpan }>
            <div className = "shadow-lg dark:shadow-none dark:border-gray-700 hover:scale-105 duration-200 shadow-gray-400 border border-gray-100 md:h-60 md:w-60 h-40 w-40 rounded-xl bg-cover" style={{ backgroundImage: `url(${ props.img })`, }}>
            </div>
            <div className = "w-full text-center pt-3 italic dark:text-gray-300">{ props.name }</div>
            <div className = "w-full pt-2 flex gap-2 justify-center">
                <a href = { props.linkedin }>
                    <LinkedIn></LinkedIn>
                </a>
                <a href = { props.github }>
                    <Github></Github>
                </a>
            </div>
        </div>
    );
}

Profile.defaultProps = {
    colSpan: "col-span-1",
};

export default Profile;