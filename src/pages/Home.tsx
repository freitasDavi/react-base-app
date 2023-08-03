import { Link } from "react-router-dom";



export default function Home() {

    return (
        <div>
            <h1 className="text-3xl font-bold">Hello from home!</h1>
            <Link to="/login" className="underline text-blue-500 hover:text-blue-700">Login</Link>
        </div>
    )
}