/* eslint-disable react/prop-types */

const VideoCard = ({ info }) => {

    if (info === 0) return;

    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="m-2 p-2 w-72 text-sm shadow-md cursor-pointer">
            <img className="rounded-xl w-full" alt="thumbnails" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li> {channelTitle}</li>
                <li >Views:{Math.round(statistics.viewCount / 100000)}M</li>
            </ul>
        </div>
    )
};

// export const Redbordervideocard = ({ info }) => {
//     return (
//         <div className="p-1 m-2 border border-red-500">
//             <VideoCard info={info} />
//         </div>
//     )
// };






export default VideoCard;