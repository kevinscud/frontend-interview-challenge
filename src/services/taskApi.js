// I have created a CORS proxy at `https://cors-proxy.kevinscud.workers.dev` to bypass CORS restrictions
// const BASE_URL = 'https://task.quatrixglobal.com';
const BASE_URL = 'https://cors-proxy.kevinscud.workers.dev/?url=https://task.quatrixglobal.com';

// Handle fetch errors
const handleFetchError = (response) => {
    // console.log(response);
    console.log(Date.now());

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
};

// Fetch all tasks with pagination
export const fetchTasks = async (page = 1, perPage = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/tasks?page=${page}&per_page=${perPage}`);
        const data = await handleFetchError(response);
        return data;
    }
    catch (error) {
        throw new Error('Failed to fetch tasks');
    }
};

