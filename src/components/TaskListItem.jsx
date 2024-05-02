import PropTypes from 'prop-types';
import { Link } from '@tanstack/react-router';

const TaskListItem = ({ task }) => {
    const href = `/tasks/${task.id}`;

    return (
        <div className='tasklist-item'>
            <h3>{task.subject}</h3>
            <p>{task.description}</p>
            <Link to={href}>View Details</Link>
            {/* <a href={href}>View Details</a> */}
            {/* <button>View Details</button> */}
            <div className='task-info'>
                <div>
                    Status: <span>{task.status_id}</span>
                </div>
                <div>
                    Priority: <span>{task.task_priority}</span>
                </div>
                <div>
                    Due: <span>{task.due_date}</span>
                </div>
            </div>
        </div>
    );
}

TaskListItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        object: PropTypes.string.isRequired,
        task_priority: PropTypes.string.isRequired,
        status_id: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        due_date: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
    }).isRequired
};

export default TaskListItem;