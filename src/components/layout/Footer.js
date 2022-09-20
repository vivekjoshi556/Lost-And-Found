const Footer = () => {
    return (
        <footer className = "dark:bg-gray-900 w-full theme shadow-inner">
            {/* <div className = "container mx-auto px-4 py-5 text-center">
                <div className = "flex flex-wrap -mx-4">
                    <div className = "w-full">
                        <div className = "flex flex-wrap">
                            <div className = "w-full">
                                <ul className = "text-sm flex justify-center items-center gap-4">
                                    <li><a className = "dark:text-gray-400 dark:hover:text-gray-300 text-gray-500 hover:text-gray-600" href="#">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className = "flex md:flex-row flex-col  w-full dark:border-gray-700 border-t justify-center items-center gap-4">
                <div className = "pt-3 pb-2">
                    <a className = "inline-block mb-0 text-gray-900 text-lg font-semibold" href="www.google.com">
                        <img className = "h-12" src="#" alt="" width="auto" />
                    </a>
                </div>
                <div>
                    <p className = "text-center text-sm text-gray-500 dark:text-gray-300">This is a Open Source Project.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;