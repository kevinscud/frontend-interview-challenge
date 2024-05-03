import PropTypes from 'prop-types';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

const TaskDetails = ({ task }) => {
    const [ edit, setEdit ] = useState(false);
    const [taskData, setTaskData] = useState(task);

    const dueText = format(new Date(task.created_at), "iiii, dd MMMM yyyy 'at' h:mm aa"); // e.g., "Monday, 23 May 2024 at 9:30 AM"    
    const updatedText = formatDistance(new Date(task.updated_at), new Date(),  { addSuffix: true });
    const createdText = formatDistance(new Date(task.created_at), new Date(),  { addSuffix: true })

    return (
        // const updated = new Date()
        <div className='wrapper'>
            <div className='tasklist-container main-container'>
                <h2 style={{ margin: '30px 0 -30px' }}>Task Details</h2>
                <p className='intro'>You can manage this task here.</p>
                
                {!edit &&
                <>
                <div className='task-details view'>
                    <p>Subject</p><h3>{task.subject}</h3>
                    <p>Description</p><p>{task.description}</p>
                    <p>Due on</p><time dateTime={task.due_date}>{dueText}</time>
                    <p>Status</p><p>{task.status_id}</p>
                    <p>Priority</p><p>{task.task_priority}</p>
                    <div style={{gridColumn: '1/3', paddingTop: 15, fontSize: 'smaller', opacity: 0.8, borderTop: '1px dashed #ddd'}}>
                        Created {createdText} <>&middot;</> Updated {updatedText}
                    </div>
                </div>
                <div style={{marginBottom: 30}}>
                    <button onClick={() => setEdit(true)}>Edit Task</button>
                </div>
                </>
            }


            {edit &&
                <div className='task-details tasklist-item edit'>
                    <h3>{task.subject}</h3>
                    <label>
                        <span>Subject</span>
                        <input type="text" value={task.subject} />
                    </label>
                    <label>
                        <span>Description</span>
                        <input type="text" value={task.description} />
                    </label>
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
                        <label>
                            <span>Due Date</span>
                            <input type='datetime-local' value={task.due_date} />
                        </label>
                    </div>
                    <button onClick={()=> setEdit(false)}>Save Changes</button>
                </div>
            }

            </div>
        </div>
    );
}

TaskDetails.propTypes = {
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

export default TaskDetails;