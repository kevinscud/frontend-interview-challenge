const NewTask = () => {
    return (
        <div className='wrapper'>
            <div className='tasklist-container main-container'>
                <h2 style={{ margin: '30px 0 -30px' }}>New Task</h2>
                <p className='intro'>Create a new tasks by filling out this form.</p>

                <div className='task-details view'>
                    <p className='key'>Subject</p>
                    <p style={{ marginRight: 100 }}>{'task.subject'}</p>

                    <p className='key'>Description</p>
                    <p>{'task.description'}</p>

                    <p className='key'>Due on</p>
                    <time dateTime={'task.due_date'}>{'dueText'}</time>

                    <p className='key'>Priority</p>
                    <p>{'priorityText'}</p>

                    <div className='status-container'>
                        <p className={`status ${'task.status_id'}`}>
                            {/* <span className={`status ${task.status_id}`}>{statusText}</span> */}
                            <span className='status-icon material-symbols-rounded'>{'statusIcon'}</span>
                            <span className='status-text'>{'statusText'}</span>
                        </p>
                    </div>

                    <div className='time-summary'>
                        Created now <span style={{ padding: '0 10px' }}>&middot;</span> Updated now
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTask;