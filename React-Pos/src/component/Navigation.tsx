import {Link} from "react-router-dom";
import "./Navigation.css";


export function Navigation() {
    return (
        <>
            <header className="bg-blue-600 shadow-lg">
                <nav className="px-4 py-3">
                    <ul className="flex text-white space-x-16">
                        <Link to='/' className="link">Dashboard</Link>
                        <Link to='/add' className="link">Add</Link>
                        <Link to='/delete' className="link">Delete</Link>
                        <Link to='/update'className="link">Update</Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}