import { Link } from "@tanstack/react-router";
import StateContainer from "../components/StateContainer";
import img404 from '../assets/404-not-found.svg'

const NotFoundPage = () => {
    return (
        <StateContainer>
            <h2>Page Not Found</h2>
            <p>The requested resource was not found.</p>

            <img src={img404} alt='Page not found' />

            <Link to={'/'}>Go To Homepage</Link>
        </StateContainer>
    );
}

export default NotFoundPage;