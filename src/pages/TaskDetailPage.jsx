import PropTypes from 'prop-types';
import { useTask } from '../services/queries';
import TaskListItem from '../components/TaskListItem';
import { getRouteApi, Link } from '@tanstack/react-router'
import TaskDetails from '../components/TaskDetails';
import Loader from '../components/Loader';
import StateContainer from '../components/StateContainer';

// The root where this component should be rendered
const ROUTE = '/tasks/$taskId';

const LoadingState = () => {
    return (
        <Loader>
            <h2>Task</h2>
            <p className='intro'>Task details will be shown here.</p>
        </Loader>
    );
}

const ErrorState = ({ response }) => {
    if (response?.status === 404) {
        return (
            <StateContainer>
                <h2>Task not found</h2>
                <p className='intro'>The requested task was not found. It may have been deleted, or the provided ID may be incorrect.</p>
                {/* <a href='/tasks'>Return to Tasks</a> */}
                <Link to={'/tasks'}>Return to Tasks</Link>
            </StateContainer>
        );
    } else {
        return (
            <StateContainer>
                <h2>Something went wrong.</h2>
                <p className='intro'>An error occurred while fetching tasks. Please check your internet connection and try again.</p>
                <Link search={(prev) => ({...prev, refresh: Date.now()})}>Refresh Page</Link>
            </StateContainer>
        );
    }
}

// let taskId = 'task_2fmmoDZSgbfsEUpm3fz46lh7pMl';
// taskId = 'task_2fmmoDZSgbfsEUpm3fz46lh7pMl';

const TaskDetailPage = ({ taskId }) => {
    // Use loader data for this root if taskId is not provided in props
    taskId = taskId ?? getRouteApi(ROUTE).useLoaderData()
    const query = useTask(taskId);

    const { data, error, isLoading, isError } = query;

    if (isLoading) return <LoadingState />
    if (isError) return <ErrorState response={error.response} />
    // return <TaskListItem task={data} />
    return <TaskDetails task={data} />
}

// Props validation

TaskDetailPage.propTypes = {
    taskId: PropTypes.string,
};

ErrorState.propTypes = {
    response: PropTypes.shape({
        status: PropTypes.number,
    }),
}

export default TaskDetailPage;