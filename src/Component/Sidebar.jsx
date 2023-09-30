
const Sidebar = () => {
    return (
        <div className="w-52 bg-white shadow-lg  fixed max-h-full cursor-pointer overflow-y-scroll text-sm">

            <ul className="m-3 p-2">
                <li>
                    {/* <Link to="/">Home</Link>
                     */}
                    Home
                </li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>

            <h1 className="font-bold mt-1 px-5 text-lg">Liabray</h1>
            <ul className="m-3 p-2">
                <li>Your channel</li>
                <li>History</li>
                <li>Your videos</li>
                <li>Watch later</li>
            </ul>
            <h1 className="font-bold my-1 px-5 text-lg">More from Youtube</h1>
            <ul className="m-3 p-2">
                <li>Youtube Premium</li>
                <li>Youtube Studio</li>
                <li>Youtube Music</li>
                <li>Youtube Kids</li>
            </ul>

            <h1 className="font-bold my-1 px-5 text-lg">Explore</h1>
            <ul className="m-3 p-2">
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Learning</li>
                <li>Fashion</li>

            </ul>

            <ul className="m-3 p-2">
                <li>Settings</li>
                <li>Report history</li>
                <li>Help</li>
                <li>Send feedback</li>
            </ul>

        </div>
    )
}

export default Sidebar;