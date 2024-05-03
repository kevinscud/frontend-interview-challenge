import { Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../components/Header';

const PageLayout = () => {
    return (
        <>  
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
}

export default PageLayout;