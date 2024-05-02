import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem';
// import Pagination from './Pagination';  

const TaskList = ({ tasks }) => {
    return (
        <div className='wrapper'>
            <h2 style={{ textAlign: 'center', margin: '30px' }}>Task List</h2>
            <div className='tasklist-container'>
                {tasks.map((task) => (
                    <TaskListItem key={task.id} task={task} />
                ))}
                {/* <Pagination currentPage={pagination.page} /> */}
            </div>
        </div>

    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default TaskList;
