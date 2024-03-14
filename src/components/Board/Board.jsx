import { useState } from "react";
import TaskList from "../TaskList/TaskList";

export default function Board() {
    const uniqueId = () => {
        const id = "id" + Math.random().toString(16).slice(2);
        return id;
    };

    const [currentTaskLists, setCurrentTaskLists] = useState([uniqueId()]);

    const handleAddList = () => {
        const newCurrentTaskLists = [...currentTaskLists, uniqueId()];
        setCurrentTaskLists(newCurrentTaskLists);
    };

    const handleDeleteList = (id) => {
        const newCurrentTaskLists = currentTaskLists.filter((taskId) => taskId !== id);
        setCurrentTaskLists(newCurrentTaskLists);
    };

    return (
        <div className="board">
            <h1 className="board-title">Board 1</h1>
            <div className="board-list">
                {currentTaskLists.map((taskListID) => (
                    <TaskList
                        key={taskListID}
                        onDeleteList={() => handleDeleteList(taskListID)}
                    />
                ))}
            </div>

            <button onClick={handleAddList}>Add List</button>
        </div>
    );
}