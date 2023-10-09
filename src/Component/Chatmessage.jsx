

// eslint-disable-next-line react/prop-types
const Chatmessage = ({ name, message }) => {
    return (
        <div className="m-2 flex  items-center ">
            <img className="w-12 rounded-full" src="https://avatars.githubusercontent.com/u/115249964?s=400&u=942fd4851927fed6b27e49e0f495cb6afcd697f9&v=4" alt="user_icon" />
            <span className="p-2">
                <h1 className="font-bold">{name}</h1>
            </span>
            <span><p>{message}</p></span>
        </div>
    )
}

export default Chatmessage;