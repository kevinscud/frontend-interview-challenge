import { useState, useEffect } from 'react'
import { fetchTasks } from './services/taskApi';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const fetchTasksData = async () => {
            const data = await fetchTasks(currentPage);
            setTasks(data.data);
        };
    
        fetchTasksData();
    }, [currentPage]);
    

    return (
        <>
            <TaskList tasks={tasks} />
        </>
    )
}

export default App
