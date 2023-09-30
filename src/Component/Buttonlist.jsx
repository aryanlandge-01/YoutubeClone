import Button from "./Button";


const Buttonlist = () => {

    const list = [
        "All", "Live", "Suits", "Javascript", "Movies", "Mancity", "Travel", "Codewithharry", "Fashion", "Football", "Sexeducation", "Cricket", "Programming"
    ];

    return (
        <div className="flex  cursor-pointer overflow-x-auto">

            {list.map((item, index) => (
                <Button key={index} name={item} />
            ))}

        </div>
    )
}

export default Buttonlist;