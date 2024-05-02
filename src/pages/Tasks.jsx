import PropTypes from 'prop-types';
import TaskList from '../components/TaskList';
import { useTasks } from '../services/queries';


const LoadingState = () => {
    return (
        <div className='wrapper'>
            <h1>Please hang on...</h1>
            <p>We are getting the task list.</p>
        </div>
    );
}

const EmptyState = () => {
    return (
        <div className='wrapper'>
            <h1>Nothing to see here.</h1>
            <p>No tasks available.</p>
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

const Tasks = () => {
    const query = useTasks();
    // console.log(query)

    const { data, error, isLoading, isError} = query;

    if (isLoading) return <LoadingState />
    if (isError) return <ErrorState response={error.response} />
    console.log(data.data)
    return <TaskList tasks={data.data} />
}

export default Tasks
