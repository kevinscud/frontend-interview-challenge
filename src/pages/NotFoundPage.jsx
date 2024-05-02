import { Link } from "@tanstack/react-router";

const NotFoundPage = () => {
    return(
        <div className='wrapper'>
            <h1>Page Not Found</h1>
            <p>The requested resource was not found.</p>

            <Link to={'/'}>Go To Homepage</Link>
        </div>
    );
}

export default NotFoundPage;