import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './routes'
import './assets/css/main.css'


createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router} />
    </>
)
