import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import Commentscontainer from "./Commentscontainer";
import Livechat from "./Livechat";


const Watchpage = () => {

    const [searchParam] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return (
        <div className="mt-20">
            <div className="ml-2 flex">
                <div className="mx-8 my-6 ">

                    <iframe
                        width="1000"
                        height="600"
                        src={"https://www.youtube.com/embed/" + searchParam.get("v") + "?si=_Eu6U1CfJqBS9033"}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    >
                    </iframe>
                </div>
                <div className="mx-3 shadow-md my-6 bg-slate-200 w-full rounded-md overflow-y-scroll h-[600px] flex flex-col-reverse ">
                    <Livechat />
                </div>

            </div>
            <Commentscontainer />
        </div>

    )
}

export default Watchpage