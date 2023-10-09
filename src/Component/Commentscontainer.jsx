/* eslint-disable react/prop-types */

const commentsData = [
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Akshay Saini",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Akshay Saini",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
];


const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex shadow-sm w-3/4 bg-gray-300 p-2 rounded-lg my-1">
            <img className="w-12 rounded-full" src="https://avatars.githubusercontent.com/u/115249964?s=400&u=942fd4851927fed6b27e49e0f495cb6afcd697f9&v=4" alt="user_icon" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const Commentlist = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}  >
            <Comment data={comment} />
            <div className="ml-10 border border-l-black">
                <Commentlist comments={comment.replies} />
            </div>
        </div>
    ));
}



const Commentscontainer = () => {
    return (
        <div className="mx-8 p-2 ">
            <Commentlist comments={commentsData} />
        </div>
    )
}

export default Commentscontainer;