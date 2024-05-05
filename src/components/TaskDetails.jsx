import PropTypes from 'prop-types';
// import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { format, formatDistance } from 'date-fns';
import { useStartProgress, useStopProgress, useCloseTask, useReopenTask } from '../services/queries';

const TaskDetails = ({ task }) => {
    const [edit, setEdit] = useState(false);
    // const [taskData, setTaskData] = useState(task);

    const dueText = format(new Date(task.due_date), "iiii, dd MMMM yyyy 'at' h:mm aa"); // e.g., "Monday, 23 May 2024 at 9:30 AM"    
    const datetimeInputValue = format(new Date(task.due_date), "yyyy-MM-ddThh:mm");
    console.log(datetimeInputValue)

    const updatedText = formatDistance(new Date(task.updated_at), new Date(), { addSuffix: true });
    const createdText = formatDistance(new Date(task.created_at), new Date(), { addSuffix: true })

    // Functions to update task status
    const { mutate: startProgress } = useStartProgress(task.id);
    const { mutate: stopProgress } = useStopProgress(task.id);
    const { mutate: closeTask } = useCloseTask(task.id);
    const { mutate: reopenTask } = useReopenTask(task.id);

    const status = task.status_id;
    const [statusText, statusIcon] = { // [displayText, materialSymbolName]
        open: ['Open', 'circle'],
        in_progress: ['In Progress', 'pace'],
        closed: ['Closed', 'task_alt'],
    }[task.status_id];

    return (
        // const updated = new Date()
        <div className='wrapper'>
            <div className='tasklist-container main-container'>
                <h2 style={{ margin: '30px 0 -30px' }}>Task Details</h2>
                <p className='intro'>You can manage this task here.</p>

                {!edit &&
                    <>
                        <div className='task-details view'>
                            <p className='key'>Subject</p>
                            <h3 style={{ marginRight: 100 }}>{task.subject}</h3>

                            <p className='key'>Description</p>
                            <p>{task.description}</p>

                            <p className='key'>Due on</p>
                            <time dateTime={task.due_date}>{dueText}</time>

                            <p className='key'>Priority</p>
                            <p>{task.task_priority}</p>

                            <div className='status-container'>
                                <p className={`status ${task.status_id}`}>
                                    {/* <span className={`status ${task.status_id}`}>{statusText}</span> */}
                                    <span className='status-icon material-symbols-rounded'>{statusIcon}</span>
                                    <span className='status-text'>{statusText}</span>
                                </p>
                            </div>

                            <div style={{ gridColumn: '1/3', fontStyle: 'italic', paddingTop: 15, fontSize: 'smaller', opacity: 0.8, borderTop: '1px dashed #ddd' }}>
                                Created {createdText} <>&middot;</> Updated {updatedText}
                            </div>
                        </div>
                        <div style={{ marginBottom: 6 }}>
                            <button type='button' icon='edit_note' className='action-button' onClick={() => setEdit(true)}>Edit Task</button>

                            {status == 'open' &&
                                <button type='button' icon='start' className='action-button' onClick={() => startProgress()}>Start Progress</button>
                            }

                            {status == 'in_progress' &&
                                <button type='button' icon='circle' className='action-button' onClick={() => stopProgress()}>Stop Progress</button>
                            }

                            {(status == 'open' || status == 'in_progress') &&
                                <button type='button' icon='task_alt' className='action-button' onClick={() => closeTask()}>Close Task</button>
                            }

                            {status == 'closed' &&
                                <button type='button' icon='restart_alt' className='action-button' onClick={() => reopenTask()}>Reopen Task</button>
                            }
                        </div>
                    </>
                }


                {edit &&
                    <>
                        <div className='task-details edit'>
                            <label className='key'>Subject</label>
                            <input onChange={(val) => val} type="text" value={task.subject} />

                            <label className='key'>Description</label>
                            <input onChange={(val) => val} type="text" value={task.description} />

                            <label className='key'>Priority</label>
                            <p>{task.task_priority}</p>

                            <label className='key'>Due on</label>
                            <input onChange={(val) => console.log(val)} type='datetime-local' value={datetimeInputValue} />

                        </div>

                        <div style={{ marginBottom: 6 }}>
                            <button type='button' icon='upgrade' className='action-button' onClick={() => setEdit(false)}>Update</button>
                            <button type='button' icon='close' className='action-button' onClick={() => setEdit(false)}>Cancel</button>
                        </div>
                    </>
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