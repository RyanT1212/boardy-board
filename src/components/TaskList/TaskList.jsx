import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

export default function TaskList({ onDeleteList }) {
    const [taskItemList, setTaskItemList] = useState([null]);
    const [taskListName, setTaskListName] = useState("List 1");

    const handleAddTask = () => {
        const newTaskItemList = [...taskItemList, null];
        setTaskItemList(newTaskItemList);
    };

    const handleSaveTask = (index, newContent) => {
        const newTaskItemList = [...taskItemList];
        newTaskItemList[index] = newContent;
        setTaskItemList(newTaskItemList);
    };

    const handleDeleteTask = (index) => {
        const newTaskItemList = [...taskItemList];
        newTaskItemList.splice(index, 1);
        setTaskItemList(newTaskItemList);
    };

    return (
        <div className="taskList">
            <h1>
                {taskListName}
                <button onClick={onDeleteList}>Delete List</button>
            </h1>
            {taskItemList.map((taskItem, index) => (
                <TaskItem
                    key={index}
                    content={taskItem}
                    onSave={(newContent) => handleSaveTask(index, newContent)}
                    onDelete={() => handleDeleteTask(index)}
                />
            ))}
            <button onClick={handleAddTask}>Add task</button>
        </div>
    );
}
