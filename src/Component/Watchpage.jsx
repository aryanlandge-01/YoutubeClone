import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";


const Watchpage = () => {

    const [searchParam] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return (
        <div className="ml-2">
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

        </div>
    )
}

export default Watchpage