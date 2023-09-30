import Body from "./Component/Body";
import { Provider } from "react-redux";
import store from "./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./Component/Maincontainer";
import Watchpage from "./Component/Watchpage";
import Head from "./Component/Head";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />
      },
      {
        path: "watch",
        element: <Watchpage />
      }
    ]
  },
])


function App() {
  return (
    <Provider store={store}>
      <div >
        <Head />
        <RouterProvider router={appRouter} />
        <Body />
      </div>
    </Provider>

  )
}

export default App
