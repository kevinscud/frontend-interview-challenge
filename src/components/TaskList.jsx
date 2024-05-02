import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem';
// import Pagination from './Pagination';  

const TaskList = ({ tasks }) => {
    return (
        <div className='wrapper'>
            <div className='tasklist-container'>
                <h2 style={{ margin: '30px 0 -30px' }}>Task List</h2>
                <p className='task-count'>Showing <em>3</em> of <em>20</em> tasks</p>
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
