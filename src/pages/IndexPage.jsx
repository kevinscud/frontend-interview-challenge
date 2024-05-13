
import taskListImg from "../assets/task-list.svg";
import taskCreateImg from "../assets/task-create.svg";
import taskUpdateImg from "../assets/task-update.svg";
import taskDeleteImg from "../assets/task-delete.svg";

const Index = () => {
    return (
        <>
            <div className="wrapper" style={{ display: 'none', textAlign: "center" }}>
                <h3>Welcome Home!</h3>
                <p>This is a single task to check if everything is set up.</p>
                <br />
                <br />
            </div>
            <div className='wrapper'>
                <div className='main-container'>
                    <h2 style={{ margin: '30px 0 -20px' }}>Task Management Made Easy</h2>
                    <p className="" style={{fontSize: 22, fontWeight: 200}}>Welcome to our task management application powered by React! Streamline your workflow and stay organized with these powerful features:</p>

                    <div className="features">
                        <div className="feature">
                            <div className="feature-image">
                                <img src={taskListImg} />
                            </div>

                            <div className="feature-desc">
                                <h3 rel="1">View Tasks at a Glance</h3>
                                <p>Browse through your tasks with detailed information including subject, priority, description, due date and colour-coded status.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-image">
                            <img src={taskCreateImg} />
                            </div>

                            <div className="feature-desc">
                                <h3 rel="2">Create and Customize Tasks</h3>
                                <p>Create new tasks by filling out a simple form. Customize each task with specific details such as subject, priority level, description, and optional due date.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-image">
                            <img src={taskUpdateImg} />
                            </div>

                            <div className="feature-desc">
                                <h3 rel="3">Update Tasks on the Fly</h3>
                                <p>Modify existing tasks with ease. Edit subject, priority, description, due date, or status to keep your task list up-to-date.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-image">
                                <img src={taskDeleteImg} />
                            </div>

                            <div className="feature-desc">
                                <h3 rel="4">Delete with Confidence</h3>
                                <p>Remove tasks easily. A confirmation step ensures that no task is deleted accidentally.</p>
                            </div>
                        </div>

                    </div>

                    {/* <p>
                        Get started now and experience a smarter way to manage your tasks!
                        <br/>
                        <Link to="/create">Create task</Link>
                        <>&nbsp;</>
                        <Link to="/tasks">View Tasks</Link>
                    </p> */}
                </div>
            </div>
        </>
    );
}

export default Index;