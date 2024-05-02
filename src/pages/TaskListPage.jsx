import PropTypes from 'prop-types';
import TaskList from '../components/TaskList';
import { useTasks } from '../services/queries';
import { getRouteApi } from '@tanstack/react-router'

// The root where this component should be rendered
const ROUTE = '/tasks';

const LoadingState = () => {
    return (
        <div className='wrapper'>
            <h1>Please hang on...</h1>
            <p>We are getting the task list.</p>
        </div>
    );
}

const ErrorState = ({ response }) => {
    
    if (response?.status === 404) {
        return (
            <div className='wrapper'>
                <h1>Tasks not found</h1>
                <p>The requested task was not found. It may have been deleted, or the provided ID may be incorrect.</p>
                <a href='#'>Return to Tasks</a>
            </div>
        );
    } else {
        return (
            <div className='wrapper'>
                <h1>An error occurred while fetching tasks.</h1>
                <p>Something went wrong. Sorry.</p>
                <a href='#'>Return to Tasks</a>
            </div>
        );
    }
}

ErrorState.propTypes = {
    response: PropTypes.shape({
        status: PropTypes.number,
    }),
}

const TaskListPage = ({page, limit}) => {

    const {page: pageParam, limit: limitParam } = getRouteApi(ROUTE).useSearch();
    console.log('+++',pageParam, limitParam);
    page = page ?? pageParam;
    limit = limit ?? limitParam;
    
    console.log('---',page, limit);
    const query = useTasks({page, limit});
    // const query = useTasks(page, limit);
    // console.log(query)

    const { data, error, isLoading, isError} = query;

    if (isLoading) return <LoadingState />
    if (isError) return <ErrorState response={error.response} />
    // console.log(data.data)
    return <TaskList tasks={data.data} />
}

TaskListPage.propTypes = {
    page: PropTypes.number,
    limit: PropTypes.number
}

export default TaskListPage
