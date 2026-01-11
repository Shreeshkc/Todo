import React from "react";

const TodoItem = (props) => {
    const { text, complete, onToggle } = props;

    return (
        <li className={`todo-item ${complete ? "completed" : ""}`}>
            <span>
                <input
                    type="checkbox"
                    checked={!!complete}
                    onChange={() => onToggle && onToggle()}
                />
                <span className="todo-text">{text}</span>
            </span>
            <p>....</p>
        </li>
    );
};

export default TodoItem;