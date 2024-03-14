import "./TaskItem.css";

export default function TaskItem({ content, onSave, onDelete }) {
    // Get passed a handle delete function from TaskList parent, that deletes TaskItem from TaskList and deletes from Database
    // Get passed a handle save function from TaskList parent, that saves TaskItem in TaskList and updates/uploads to Database
    // on focusout, save content to taskItemContent, then call passed save function

    const handleOnSave = (event) => {
        event.preventDefault();
        const saveContent = event.target.value;

        if (saveContent == null || saveContent == "") {
            onSave(null);
        } else {
            onSave(event.target.value);
        }
    };

    return (
        <div>
            {content == null ? (
                <form>
                    <textarea
                        autoFocus
                        placeholder="Enter item here"
                        onBlur={handleOnSave}
                        defaultValue={content}
                    ></textarea>
                </form>
            ) : (
                <div>
                    {content}
                    <button onClick={onDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}
