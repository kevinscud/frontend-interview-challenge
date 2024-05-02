import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <>
            <nav>
                <Link to={'/tasks'}>Task List</Link>
            </nav>
            <h1>Page Not Found</h1>

            <Link to={'/'}>Go To Homepage</Link>
        </>
    );
}

export default NotFound;