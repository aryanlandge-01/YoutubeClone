import { useEffect, useState } from "react";
import YOUTUBE_VIDEO_API from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const Videocontainer = () => {

    const [videos, setvideos] = useState([]);

    useEffect(() => {
        getVideos();

    }, [])

    const getVideos = async () => {

        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        // console.log(json.items);
        setvideos(json.items);


    }
    // console.log(videos);

    return (
        <div className="flex w-full  flex-wrap">
            {/* {videos && <Redbordervideocard info={videos[0]} />} */}
            {
                videos.map((video) => (
                    <Link key={video.id} to={"/watch?v=" + video.id}>
                        <VideoCard info={video} />
                    </Link>
                    // <VideoCard key={video.id} info={video} />
                )
                )
            }
        </div>
    )
}

export default Videocontainer;