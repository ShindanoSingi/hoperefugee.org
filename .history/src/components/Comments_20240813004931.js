import React, { useState } from "react";

function CollapsibleComments({ comments, index, handleComment }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className="mt-4">
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
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleComment(index, e.target.value);
                        e.target.value = "";
                    }
                }}
            />
        </div>
    );
}

export default CollapsibleComments;
