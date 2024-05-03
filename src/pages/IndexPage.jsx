import { Link } from "react-router-dom";
import TaskDetailPage from "./TaskDetailPage";

const Index = () => {
    return (
        <>
            <div className="wrapper" style={{textAlign: "center"}}>
                <h3>Welcome Home!</h3>
                <p>This is a single task to check if everything is set up.</p>
                <br />
                <br />
            </div>
            <TaskDetailPage taskId={'task_2fmmoDZSgbfsEUpm3fz46lh7pMl'} />
        </>
    );
}

export default Index;