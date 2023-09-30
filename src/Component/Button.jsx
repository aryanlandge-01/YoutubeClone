/* eslint-disable react/prop-types */


const Button = (props) => {
    return (
        <div>

            <button className="p-2 mx-3 my-2 text-xs bg-gray-200 rounded-lg ">{props.name}</button>

        </div>
    )
}

export default Button;