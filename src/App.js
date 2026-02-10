import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Browse from "./components/Browse";
import ProtectedRoute from "./components/ProtectedRoute";
import Body from "./components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: (
      <ProtectedRoute>
        <Browse />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
