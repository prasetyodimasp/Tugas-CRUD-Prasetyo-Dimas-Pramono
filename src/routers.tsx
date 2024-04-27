import  App  from "./App";
import { createBrowserRouter } from "react-router-dom";
import UserDetailPage from "./pages/user-detail-page";

export const router = createBrowserRouter([
    {path: "/", element: <App />}, 
    {path: "/:id", element:<UserDetailPage />},
]);