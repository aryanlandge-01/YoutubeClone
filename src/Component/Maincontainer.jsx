import Buttonlist from "./Buttonlist";
import Videocontainer from "./Videocontainer";


const Maincontainer = () => {
    return (
        <div className=" ml-52 overflow-x-auto overflow-y-scroll ">
            <Buttonlist />
            <Videocontainer />
        </div>
    )
}

export default Maincontainer;