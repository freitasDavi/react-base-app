import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="rounded-tl-lg rounded-tr-lg shadow bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="h-32 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl text-gray-400 font-semibold whitespace-nowraptext-white">TKN Software</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-mediumsm:mb-0 text-gray-400">
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-autoborder-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">© 2023 <a href="https://freitasdavi.github.io/" className="hover:underline">TKN™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}