import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem';
// import Pagination from './Pagination';  

const TaskList = ({ taskData }) => {
    // const tasks = taskData.data;
    const {data:tasks, page, total} = taskData;
    const count = tasks.length;
    return (
        <div className='wrapper'>
            <div className='tasklist-container main-container'>
                <h2 style={{ margin: '30px 0 -30px' }}>Tasks</h2>
                <p className='intro'>Showing <em>{count}</em> of <em>20</em> tasks.</p>
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
