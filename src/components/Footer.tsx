import logo from "@/assets/logo.png";

export function Footer() {
    return (
        <footer className="rounded-lg shadow bg-gray-900 m-4 mb-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="h-32 mr-3" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowraptext-white">Flowbite</span> */}
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-mediumsm:mb-0 text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-autoborder-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}