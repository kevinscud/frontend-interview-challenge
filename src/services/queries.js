import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// The CORS issue has since been resolved so this is no longer necessary
// const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://task.quatrixglobal.com';

const BASE_URL = 'https://task.quatrixglobal.com';

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

// Fetch a list of tasks
export function useTasks({page = 1, limit = 10}) {
    return useQuery({
        queryKey: ['tasks', page, limit],
        queryFn: () => api.get(`/tasks?page=${page}&per_page=${limit}`).then(res => res.data),
        retry: 1
    });
}

// Fetch the task with a given taskId
export function useTask(taskId) {
    return useQuery({
        queryKey: ['tasks', taskId],
        queryFn: () => api.get(`/tasks/${taskId}`).then(res => res.data),
        retry: 1
    });
}

// Create a new task
export function useCreateTask() {
    const queryClient = useQueryClient();
    return useMutation(newTask => fetch(`${BASE_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
    }).then(res => res.json()), {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });
}

// Update a task
export function useUpdateTask() {
    const queryClient = useQueryClient();
    return useMutation(updatedTask => fetch(`${BASE_URL}/tasks/${updatedTask.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
    }).then(res => res.json()), {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });
}

// Delete a task
export function useDeleteTask() {
    const queryClient = useQueryClient();
    return useMutation(id => fetch(`${BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
    }), {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });
}
