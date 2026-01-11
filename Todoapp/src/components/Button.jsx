import React, { useState, useRef, useEffect } from "react";

const Button = ({ onAdd }) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open]);

    const handleAdd = () => {
        const trimmed = text.trim();
        if (!trimmed) return;
        if (typeof onAdd === "function") onAdd(trimmed);
        setText("");
        setOpen(false);
    };

    return (
        <div>
            {!open ? (
                <button className="todo-button" onClick={() => setOpen(true)}>
                    Add Todo
                </button>
            ) : (
                <div className="add-todo">
                    <input
                        ref={inputRef}
                        className="todo-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="New todo"
                        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    />
                    <button className="todo-button" onClick={handleAdd}>
                        Add
                    </button>
                    <button
                        className="todo-button"
                        onClick={() => {
                            setOpen(false);
                            setText("");
                        }}
                        style={{ marginLeft: 8, backgroundColor: "#bbb" }}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default Button;