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
        const newToDo = {
            text: addTask,
            status: false,
            id: id
        }
        setToDos([...toDos, newToDo])
        setAddTask("")
    }


    return (
        <div>
            <div>
                <AddToDo
                    addTask={addTask}
                    setAddTask={setAddTask}
                    onClick={() => handleAddTask()}
                />
            </div>
            <div>
                {toDos.map((todo, key) => (
                    <ListToDoCard
                        key={key}
                        status={todo.status}
                        text={todo.text}
                    />
                ))}
            </div>
        </div>
    )

}

export default Home