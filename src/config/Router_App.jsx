import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Home } from "../pages/Home";
import { Private_Routes } from "./Private_Routes";
// import Todo from "../pages/Todo";
// import Todos from "../pages/Todos";
import Homes from "../pages/Homes";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            <Route path="/" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/Todo" element={<Homes />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />


        </Route>
    )
)


const Router_App = () => {


    return (
        <>

            <RouterProvider router={router} />
        </>
    )
}


export { Router_App }