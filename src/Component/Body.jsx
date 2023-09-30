
import Sidebar from "./Sidebar";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


const Body = () => {

    const isMenuopen = useSelector(store => store.app.ismenuopenflag);

    return (


        <div className="grid grid-col-1 md:grid-col-11">
            {isMenuopen ? <Sidebar /> : null}
            <Outlet />
        </div>

    )
}

export default Body;