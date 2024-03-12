import "./TaskItem.css";
import { useState } from "react";

export default function TaskItem() {
    const [itemIsEditable, setitemIsEditable] = useState(true);
    const [itemEntry, setItemEntry] = useState('');

    const handleInputChange = (event) => {
        setItemEntry(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setitemIsEditable(false);
    };

    return (
        <div className="taskItem">
            {!itemIsEditable ? (
                <div>
                    <div>{itemEntry}</div>
                    <button
                        onClick={() => {
                            setitemIsEditable(true);
                        }}
                    >
                        edit
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        name="itemEntry"
                        type="text"
                        value={itemEntry}
                        onChange={handleInputChange}
                        onBlur={handleSubmit}
                    />
                </form>
            )}
        </div>
    );
}
