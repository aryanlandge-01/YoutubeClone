import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { useState, useEffect } from "react";
import { Search_Api } from "../utils/Constant";
import { CacheResult } from "../utils/SearchSlice";

const Head = () => {

    const [searchQuery, SetsearchQuery] = useState();
    const [showsuggestion, Setshowsuggestion] = useState(false);
    const [suggestion, Setsuggestion] = useState([]);

    const searchcache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchcache[searchQuery]) {
                Setsuggestion(searchcache[searchQuery]);
            } else {
                getsomeVideos();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getsomeVideos = async () => {
        const data = await fetch(Search_Api + searchQuery);
        const json = await data.json();
        Setsuggestion(json[1]);
        dispatch(CacheResult({
            [searchQuery]: json[1],
        }));
    }

    const showMenu = () => {
        dispatch(toggleMenu());
    }


    return (
        <div className="grid  fixed w-full grid-flow-col bg-white py-3 shadow-md ">
            <div className="flex  col-span-1">
                <img
                    onClick={showMenu}
                    className="h-10 cursor-pointer "
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="ham_icon" />
                <a href="/">
                    <img className="h-10 mx-2" src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2021/08/Youtube-Logo-Font.jpg?resize=849%2C395&ssl=1" alt="youtube_logo" />
                </a>
            </div>
            <div className="col-span-10  px-16">
                <input
                    value={searchQuery}
                    onChange={(e) => SetsearchQuery(e.target.value)}
                    onFocus={() => Setshowsuggestion(true)}
                    onBlur={() => Setshowsuggestion(false)}
                    className="w-1/2 border-gray-300 bg-gray-200 p-2 rounded-l-3xl"
                    type="text"
                />
                <button className="bg-gray-300 p-2 px-5 rounded-r-3xl hover:bg-gray-100" >🔍</button>
                {(searchQuery && showsuggestion) && <div className="absolute bg-white py-2 px-5 w-[25rem] shadow-lg rounded-xl cursor-pointer">
                    <ul >
                        {suggestion.map((s, index) => <li key={index} className="hover:bg-gray-200  p-1 m-1 text-sm">🔎  {s}</li>)}
                    </ul>
                </div>}

            </div>
            <div className="col-span-1">
                <img className="w-12 rounded-full" src="https://avatars.githubusercontent.com/u/115249964?s=400&u=942fd4851927fed6b27e49e0f495cb6afcd697f9&v=4" alt="user_icon" />
            </div>
        </div>
    )
}

export default Head;