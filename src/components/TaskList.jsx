import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem';

const TaskList = ({ tasks }) => {
    return (
        <div className='wrapper'>
            <h2 style={{textAlign: 'center', margin: '30px'}}>Task List</h2>
            <div>
                {tasks.map((task) => (
                    <TaskListItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default TaskList;
