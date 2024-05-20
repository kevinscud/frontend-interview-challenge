import { useCreateTask } from "../services/queries";

const NewTask = () => {
    let task = {
        "task_priority": "high",
        "subject": "Task " + new Date().toISOString(),
        "description": "Develop and schedule a radio advertisement."
    };

    task = JSON.stringify(task);

    let query = useCreateTask(task);

    console.log(query);

    return (
        <div className='wrapper'>
            <form className='tasklist-container main-container'>
                <h2 style={{ margin: '30px 0 -30px' }}>New Task</h2>
                <p className='intro'>Create a new tasks by filling out this form.</p>

                <div className='task-details view'>
                    <p className='key'>Subject</p>
                    <input className="input-box" style={{ marginRight: 100 }} value="" />

                    <p className='key'>Description</p>
                    <input className="input-box" value="" />

                    <p className='key'>Due on</p>
                    <input type="datetime-local" className="input-box" value="" />

                    <p className='key'>Priority</p>
                    <p className="input-box">
                        <div>
                            <input type="radio" id="high" name="task_priority" value="high" checked />
                            <label htmlFor="high">High Priority</label>
                        </div>

                        <div>
                            <input type="radio" id="normal" name="task_priority" value="normal" />
                            <label htmlFor="normal">Normal Priority</label>
                        </div>

                        <div>
                            <input type="radio" id="low" name="task_priority" value="low" />
                            <label htmlFor="low">Low Priority</label>
                        </div>
                    </p>

                    <div className='status-container'>
                        <p className={`status ${'task.status_id'}`}>
                            {/* <span className={`status ${task.status_id}`}>{statusText}</span> */}
                            <span className='status-icon material-symbols-rounded'>{'statusIcon'}</span>
                            <span className='status-text'>{'statusText'}</span>
                        </p>
                    </div>

                    {/* <div className='time-summary'>
                        <button>Create</button>
                        Created now <span style={{ padding: '0 10px' }}>&middot;</span> Updated now
                    </div> */}
                </div>
                <div className='task-detail-controls'>
                    <button type='button' icon='done' className='action-button'>Create</button>
                    <button type='reset' icon='close' className='action-button'>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default NewTask;