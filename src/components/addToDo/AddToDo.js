import './AddToDo.css'

function AddToDo({ addTask, setAddTask, onClick }) {

    return (
        <div className='add-bar-background'>
            <input
                className='add-input'
                placeholder='Add New Task..'
                value={addTask}
                onChange={(e) => setAddTask(e.target.value)}
            />
            <button className='add-button' onClick={onClick}>Add</button>
        </div>
    )
}

export default AddToDo