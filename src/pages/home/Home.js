import './Home.css'
import { useState } from 'react'
import AddToDo from '../../components/addToDo/AddToDo'
import ListToDoCard from '../../components/listToDoCard/ListToDoCard'
import uuid from 'react-uuid'


function Home() {
    const [addTask, setAddTask] = useState("")
    const [toDos, setToDos] = useState([])
    const id = uuid()

    const handleAddTask = () => {
        if (addTask === "") {
            alert("please add a task")
        } else {
            const newToDo = {
                text: addTask,
                status: false,
                id: id
            }
            setToDos([...toDos, newToDo])
            setAddTask("")
        }
    }
    const deleteToDo = (id) => {
        const newToDos = toDos.filter((todo) => todo.id !== id)
        setToDos(newToDos)
    }

    return (
        <div className='background'>
            <div className='to-do-card'>
                <div >
                    <AddToDo
                        addTask={addTask}
                        setAddTask={setAddTask}
                        onClick={() => handleAddTask()}
                    />
                    {toDos.map((todo, key) => (
                        <ListToDoCard
                            key={key}
                            text={todo.text}
                            onClick={() => deleteToDo(todo.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home