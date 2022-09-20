import Profile from "./Profile";

const ProfileCover = () => {
    return (
        <div>
            <h2 className = "w-full text-3xl md:text-5xl font-extrabold text-center mb-12 dark:text-gray-300">Development Team</h2>
            <div className = "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 flex-col px-7 mb-6">
                <Profile colSpan = "lg:col-span-1 md:col-span-2 col-span-1" name = "Vivek Joshi" linkedin = "https://www.linkedin.com/in/vivek-joshi-97509015a/" github = "https://github.com/vivekjoshi556" img = "./images/vivek.png"></Profile>
            </div>
        </div>
    );
}

export default ProfileCover;