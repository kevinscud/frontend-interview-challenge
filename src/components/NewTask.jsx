import { useCreateTask } from "../services/queries";

let handleInput = e => {
    console.log(e.target.value);
}

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
                    <input  onChange={handleInput} className="input-box" defaultValue="" />

                    <p className='key'>Description</p>
                    <input onChange={handleInput} className="input-box" defaultValue="" />

                    <p className='key'>Due on</p>
                    <input onChange={handleInput} type="datetime-local" className="input-box" defaultValue="" />

                    <p className='key'>Priority</p>
                    <fieldset className="input-box">
                        <div>
                            <input type="radio" id="high" name="task_priority" value="high" />
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
                    </fieldset>

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