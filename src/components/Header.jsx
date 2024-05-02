import { Link } from "@tanstack/react-router";

const Header = () => {
    return (
        <header className='wrapper'>
            {/* <div className="logo">

            </div> */}
            <nav>
                <Link to="/" className="">Home</Link>
                <Link to="/tasks" className="">Tasks</Link>
                <Link to="/create" className="">Create</Link>
            </nav>
        </header>
    );
}

export default Header;