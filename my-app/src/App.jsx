import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './app/root';
import { StudentsList } from './parts/students/StudentsList';
import { StudentPage } from './parts/students/StudentPage';


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
                {
                    path: '/students/:studentId',
                    element: <StudentPage />,
                },
            ], 
        },
    ]
);

function App() {
    return <RouterProvider router={router} />
}

export default App;