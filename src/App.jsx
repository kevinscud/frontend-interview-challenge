// import { Route, Routes } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
// import TaskList from './components/TaskList';

// import { useTasks } from './services/queries';
import Tasks from './pages/Tasks';
import Task from './pages/Task';

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://task.quatrixglobal.com';


function App() {
    // let page = 1, perPage = 10;
    // const { data: tasks, error, isLoading } = useQuery({
    //     queryKey: ['tasks'],
    //     queryFn: () => fetch(`${BASE_URL}/tasks?page=${page}&per_page=${perPage}`).then(res => res.json())
    // });

    // const tasksQuery = useTasks();
    // const { data, error, isLoading} = useTasks();

    const { mutate } = useMutation({
        mutationFn: newTask => fetch(`${BASE_URL}/tasks`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTask),
        }).then(res=>res.json())
    });

    return (
        // <TaskList tasks={tasksQuery.data.data} pagination={tasksQuery} />
        // <TaskList tasks={tasks.data} />
        <Tasks />
    )
}

export default App
