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
        queryKey: [taskId],
        // queryKey: ['tasks', taskId],
        queryFn: () => api.get(`/tasks/${taskId}`).then(res => res.data),
        retry: 1
    });
}

// Change the status of an open task to in_progress
export function useStartProgress(taskId) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => api.post(`/tasks/${taskId}/start_progress`).then(res => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [taskId] })
          },
    });
}

// Change the status of an in-progress task to open
export function useStopProgress(taskId) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => api.post(`/tasks/${taskId}/stop_progress`).then(res => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [taskId] })
          },
    });
}


// Change the status of an open or in-progress task to closed
export function useCloseTask(taskId) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => api.post(`/tasks/${taskId}/close`).then(res => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [taskId] })
          },
    });
}

// Change the status of a closed task to open
export function useReopenTask(taskId) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => api.post(`/tasks/${taskId}/reopen`).then(res => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [taskId] })
          },
    });
}

// Create a new task

export function useCreateTask(task) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => api.post('/tasks', task).then(res => {
            console.log(res.data);
            return res.data
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
            console.log('Task created');
          },
    });
}

export function useCreateTask2() {
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
