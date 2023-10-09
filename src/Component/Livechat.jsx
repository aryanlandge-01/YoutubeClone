import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chatmessage from "./Chatmessage";
import { addMessage } from "../utils/ChatSlice";
import { generateMessage, generaterandomnames } from "../utils/Helper";





const Livechat = () => {

    const dispatch = useDispatch();

    const Livemessage = useSelector((store) => store.chat.messages);

    useEffect(() => {

        const data = setInterval(() => {
            console.log("poll successful");


            dispatch(
                addMessage({
                    name: generaterandomnames(),
                    message: generateMessage(15)
                }))


        }, 1000);

        return () => clearInterval(data);
    }, [])

    return (
        <div>
            {Livemessage.map((c, index) => <Chatmessage key={index} name={c.name} message={c.message} />)}
        </div>
    )
}

export default Livechat;