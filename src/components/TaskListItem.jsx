import PropTypes from 'prop-types';
import { Link } from '@tanstack/react-router';
import { formatDistance } from 'date-fns';

const TaskListItem = ({ task }) => {
    const href = `/tasks/${task.id}`;
    // const statusInfo = { // [displayText, materialSymbolName]
    const [statusText, statusIcon]  = { // [displayText, materialSymbolName]
        open: ['Open', 'circle'],
        // open: 'circle',
        in_progress: ['In Progress', 'pace'],
        // in_progress: 'clock_loader_60',
        closed: ['Closed', 'task_alt'],
        // closed: 'task_alt'
    }[task.status_id];
    
    const [priorityText, priorityIcon]  = { // [displayText, materialSymbolName]
        high: ['High Priority', 'priority_high'],
        // high: ['High Priority', 'priority_high'],
        normal: ['Normal Priority', 'priority'],
        low: ['Low Priority', 'low_priority'],
    }[task.task_priority];

    const dueDateText = formatDistance(new Date(task.due_date), new Date(),  { addSuffix: true });

    return (
        <div className='tasklist-item'>
            {/* <h3>{task.subject}</h3> */}
            <div className='status-container'>
                <p className={`status ${task.status_id}`}>
                    <span className='status-icon material-symbols-rounded'>{statusIcon}</span>
                    <span className='status-text'>{statusText}</span>
                </p>
            </div>
            <div>
                <p className='subject'>{task.subject}</p>
                <div className='task-info'>
                    <span className="material-symbols-rounded icon">{priorityIcon}</span>
                    {priorityText} <span style={{padding: '0 10px'}}>&bull;</span> Due {dueDateText}
                </div>

            </div>
            <Link to={href}>
                <span className="material-symbols-rounded">arrow_forward</span>
            </Link>
            {/* <Link to={href}>View Details</Link> */}
            {/* <a href={href}>View Details</a> */}
            {/* <button>View Details</button> */}
            {/* <div className='task-info'>
                <div>
                    Status: <span>{task.status_id}</span>
                </div>
                <div>
                    Priority: <span>{task.task_priority}</span>
                </div>
                <div>
                    Due: <span>{task.due_date}</span>
                </div>
            </div> */}
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