import React, { useState } from "react";

function Comments({ comments, index, handleComment }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [commentText, setCommentText] = useState("");

    const handleButtonClick = () => {
        handleComment(index, commentText);
        setCommentText("");
    };

    return (
        <div className="mt-4 w-full">
            <h4
                className="text-my_black font-bold cursor-pointer"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                Comments {isCollapsed ? "▼" : "▲"}
            </h4>
            {!isCollapsed && (
                <div className="max-h-24 overflow-y-auto">
                    {comments[index].map((comment, i) => (
                        <p key={i} className="text-my_black">
                            {comment}
                        </p>
                    ))}
                </div>
            )}
            <input
                type="text"
                placeholder="Add a comment..."
                className="w-full p-2 mt-2 rounded bg-my_white text-my_black"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleButtonClick();
                    }
                }}
            />
            <button
                className="mt-2 p-2 bg-my_green text-my_white rounded"
                onClick={handleButtonClick}
            >
                Add Comment
            </button>
        </div>
    );
}

export default Comments;