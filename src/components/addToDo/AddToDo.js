import './AddToDo.css'

function AddToDo({ addTask, setAddTask, onClick }) {

    return (
        <div>
            <input
                placeholder='Add New Task..'
                value={addTask}
                onChange={(e) => setAddTask(e.target.value)}
            />
            <button onClick={onClick}>Add</button>
        </div>
    )
}

export default AddToDo