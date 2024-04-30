import PropTypes from 'prop-types';

/*
{
    "id": "task_2fmmoDZSgbfsEUpm3fz46lh7pMl",
    "object": "task",
    "task_priority": "normal",
    "status_id": "open",
    "subject": "Creating a month Business Plan",
    "description": "Outline goals, strategies, budget, and timeline for a one-month period.",
    "due_date": "2024-05-02T08:00:00.000Z",
    "created_at": "2024-04-29T15:19:59.540Z",
    "updated_at": "2024-04-29T15:19:59.540Z"
}
*/
const TaskListItem = ({ task }) => {
    return (
        <div className='tasklist-item'>
            <h3>{task.subject}</h3>
            <p>{task.description}</p>
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