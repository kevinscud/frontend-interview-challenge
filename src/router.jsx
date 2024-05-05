import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import PageLayout from './pages/PageLayout'
import TaskListPage from './pages/TaskListPage'
import TaskDetailPage from './pages/TaskDetailPage'
import IndexPage from './pages/IndexPage'
import NotFoundPage from './pages/NotFoundPage'

const rootRoute = createRootRoute({
    component: PageLayout,
    notFoundComponent: NotFoundPage
});

const routes = [
    // Index
    createRoute({
        getParentRoute: () => rootRoute,
        path: '/',
        component: IndexPage,
    }),

    // Task List
    createRoute({
        getParentRoute: () => rootRoute,
        path: '/tasks', // also matches path with params: '/tasks?page=1&limit=10',
        component: TaskListPage,
        validateSearch: (params) => {
            // validate and parse the search params 
            return {
                page: Number(params?.page ?? 1),
                limit: Number(params?.limit ?? 10),
            }
        },
    }),

    // Task Details
    createRoute({
        getParentRoute: () => rootRoute,
        path: '/tasks/$taskId',
        component: TaskDetailPage,
        loader: ({ params }) => params.taskId,
    }),

];


const router = createRouter({
    routeTree: rootRoute.addChildren(routes)
});

export default router;
