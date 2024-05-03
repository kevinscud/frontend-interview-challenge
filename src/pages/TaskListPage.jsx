import PropTypes from 'prop-types';
import TaskList from '../components/TaskList';
import { useTasks } from '../services/queries';
import { getRouteApi } from '@tanstack/react-router'

// The root where this component should be rendered
const ROUTE = '/tasks';

const LoadingState = () => {
    return (
        // <div className='wrapper'>
        //     <h1>Please hang on...</h1>
        //     <p>We are getting the task list.</p>
        //     <div className='loader'></div> 
        // </div>

<div className='wrapper'>
<div className='tasklist-container' style={{textAlign: 'center'}}>
    <h2 style={{ margin: '30px 0 -30px' }}>Tasks</h2>
    <p className='task-count'>Available tasks will be shown here.</p>
    <div className='loader-container'>
        <div className='loader' /> 
    </div>
</div>
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

const TaskListPage = ({page, limit}) => {
    // Use search params for this root if page and limit are not provided in props
    const {page: pageParam, limit: limitParam } = getRouteApi(ROUTE).useSearch();
    page = page ?? pageParam;
    limit = limit ?? limitParam;
    
    const query = useTasks({page, limit});
    const { data, error, isLoading, isError} = query;

    if (isLoading) return <LoadingState />
    // if (!isLoading) return <LoadingState />
    if (isError) return <ErrorState response={error.response} />
    // console.log(data.data)
    return <TaskList tasks={data.data} />
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
