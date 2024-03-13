import { useState } from "react";
import TaskList from "../TaskList/TaskList";

function boardTitle() {}

export default function Board() {
    const [currentList, setCurrentList] = useState([<TaskList key={0} />]);
    // const [boardTitle, setBoardName] = useState({isEditable: false, boardName: "Board 1"}); // Note need to apply tracker in an App.jsx for Board
    const [boardName, setBoardName] = useState("Board 1");
    const [boardNameIsEditable, setBoardNameIsEditable] = useState(false);

    const handleAddList = () => {
        const newCurrentList = currentList.slice();
        newCurrentList.push(<TaskList key={currentList.length} />);
        setCurrentList(newCurrentList);
    };

    const switchBoardEditable = () => {
        setBoardNameIsEditable(!boardNameIsEditable);
    };

    const changeBoardName = (event) => {
        setBoardName(event.target.value);
    };

    return (
        <>
            <h1 className="board-title">
                {boardNameIsEditable ? (
                    <input
                        type="text"
                        value={boardName}
                        onChange={changeBoardName}
                        onBlur={switchBoardEditable}
                    ></input>
                ) : (
                    <div>
                        {boardName}{" "}
                        <button onClick={switchBoardEditable}>
                            Change board name
                        </button>
                    </div>
                )}
            </h1>
            <div className="board-content">
                <>{currentList}</>
                <button onClick={handleAddList}>Add List</button>
            </div>
        </>
    );
}

// Needs:
// Board title
// Add list (state management for list)

// -------------------------------------- //

// Add edit board name

// Add delete button for lists
// Add delete button for items

// Add edit button for list name
// Add better key identifier for lists & items

// Add ability to change item order in list
// Add ability to change list order in board
