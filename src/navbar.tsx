import { Link } from "./CustomLink";

// Navbar
export function Navbar() {
    return (
        <div>
            Navbar
            <Link to="/" className=" underline text-blue-500">Home</Link>
            <Link to="/components" className=" underline text-blue-500">Components</Link>
        </div>
    )
}