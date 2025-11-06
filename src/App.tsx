import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Documentation from "./pages/Documentation"
import Category from "./pages/Category"

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/quiz/:id',
      element: <Quiz/>
    },
    {
      path: '/documentation',
      element: <Documentation/>
    },
    {
      path: "/category",
      element: <Category/>
    }
  ])
  return <RouterProvider router={routes}></RouterProvider>
}

export default App