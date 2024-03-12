import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css"

export default function TaskList() {

    const [taskItemList, setTaskItemList] = useState([])

    const addTaskItem = () => {

        const newTaskItemList = taskItemList.slice()
        newTaskItemList.push(<TaskItem key={taskItemList.length}/>)
        setTaskItemList(newTaskItemList)
    }

    return (
        <div className="taskList">
            <div className="taskListTitle">list</div>

            <div className="taskItemList">
                {taskItemList}
            </div>
            <button onClick={addTaskItem}>add TaskItem</button>
        </div>
    );
}