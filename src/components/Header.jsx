import { Link } from "@tanstack/react-router";

const Header = () => {
    return (
        <header className='wrapper'>
            <nav>
                <Link to="/" className="logo">
                    <span className="icon material-symbols-rounded">task</span>
                    <span className="text">Task App</span>
                </Link>
                {/* <Link icon='home' to="/" className="nav-link">Home</Link> */}
                <Link icon='add' to="/create" className="nav-link">Create Task</Link>
                <Link icon='checklist' to="/tasks" activeOptions={{ exact: true }} className="nav-link">View Tasks</Link>
            </nav>
        </header>
    );
}

export default Header;