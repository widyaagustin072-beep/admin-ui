import React, {useState} from "react";

function PostCard(props) {
    const {title, body} = props;
    const [clicked, setClicked] = useState(false);

    //Fungsi handler ketika card diklik
    function handleClick() {
        setClicked(true);
    }

    return (
        <div
        onClick={handleClick}
        className={`p-6 rounded-lg 
                   shadow-md 
                   hover:shadow-lg 
                   cursor-pointer 
                   transition-all 
                   duration-200
                   ${clicked ? "bg-blue-100" : "bg-white"}`}
                   >
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        {title}
                    </h2>

                    <p className="text-gray-600">
                        {body}
                    </p>
                   </div>
    );
}

export default PostCard;