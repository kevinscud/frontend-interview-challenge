import PropTypes from 'prop-types';
import TaskList from '../components/TaskList';
import { useTasks } from '../services/queries';
import { getRouteApi, Link } from '@tanstack/react-router'
import Loader from '../components/Loader';
import StateContainer from '../components/StateContainer';

// The root where this component should be rendered
const ROUTE = '/tasks';

const LoadingState = () => {
    return (
        <Loader>
            <h2>Tasks</h2>
            <p className='intro'>Available tasks will be shown here.</p>
        </Loader>
    );
}

const ErrorState = ({ response }) => {

    if (response?.status === 404) {
        return (
            <StateContainer>
                <h2>Tasks not found</h2>
                <p className='intro'>The requested task was not found. It may have been deleted, or the provided ID may be incorrect.</p>
                <a href='#'>Return to Tasks</a>
            </StateContainer>
        );
    } else {
        return (
            <StateContainer>
                <h2>Something went wrong.</h2>
                <p className='intro'>An error occurred while fetching tasks. Please check your internet connection and try again.</p>
                {/* <a href='/tasks'>Refresh Page</a> */}
                <Link search={(prev) => ({...prev, refresh: Date.now()})}>Refresh Page</Link>
            </StateContainer>
        );
    }
}

const TaskListPage = ({ page, limit }) => {
    // Use search params for this root if page and limit are not provided in props
    const { page: pageParam, limit: limitParam } = getRouteApi(ROUTE).useSearch();
    page = page ?? pageParam;
    limit = limit ?? limitParam;

    const query = useTasks({ page, limit });
    const { data, error, isLoading, isError } = query;

    if (isLoading) return <LoadingState />
    // if (!isLoading) return <LoadingState />
    if (isError) return <ErrorState response={error.response} />
    // console.log(data.data)
    return <TaskList taskData={data} />
    // return <TaskList tasks={data.data} />
}

// Props validation

ErrorState.propTypes = {
    response: PropTypes.shape({
        status: PropTypes.number,
    }),
}

TaskListPage.propTypes = {
    page: PropTypes.number,
    limit: PropTypes.number
}

export default TaskListPage
