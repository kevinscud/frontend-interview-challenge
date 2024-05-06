import { Link } from "@tanstack/react-router";

const Header = () => {
    return (
        <header className='wrapper'>
            <nav>
                <div className="logo">
                    <span className="icon material-symbols-rounded">task</span>
                    <span className="text">Task App</span>
                </div>
                <Link icon='home' to="/" className="">Home</Link>
                <Link icon='checklist' to="/tasks" activeOptions={{ exact: true }} className="">View Tasks</Link>
                <Link icon='add' to="/create" className="">Create Task</Link>
            </nav>
        </header>
    );
}

export default Header;