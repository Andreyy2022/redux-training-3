import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './app/root';
import { StudentsList } from './parts/students/StudentsList';

const router = createBrowserRouter(
    [
        { 
            path: '/', 
            element: <Root />, 
            children: [
                {
                    path: '/students', 
                    element: <StudentsList />,
                },
            ], 
        },
    ]
);

function App() {
    return <RouterProvider router={router} />
}

export default App;