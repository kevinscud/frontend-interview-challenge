import PropTypes from 'prop-types';
import { useTask } from '../services/queries';
import TaskListItem from '../components/TaskListItem';

const LoadingState = () => {
    return (
        <div className='wrapper'>
            <h1>Please hang on...</h1>
            <p>We are getting the task</p>
        </div>
    );
}

const ErrorState = ({ response }) => {
    if (response?.status === 404) {
        return (
            <div className='wrapper'>
                <h1>Task not found</h1>
                <p>The requested task was not found. It may have been deleted, or the provided ID may be incorrect.</p>
                <a href='#'>Return to Tasks</a>
            </div>
        );
    } else {
        return (
            <div className='wrapper'>
                <h1>An error occurred while fetching task.</h1>
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

const Task = () => {
    const query = useTask('task_2fmmoDZSgbfsEUpm3fz46lh7pMl');
    // console.log(query)

    const { data, error, isLoading, isError} = query;

    if (isLoading) return <LoadingState />
    if (isError) return <ErrorState response={error.response} />
    return <TaskListItem task={data} />
}

export default Task;