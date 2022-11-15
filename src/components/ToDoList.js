import "./ToDoList.css";

export default function ToDoList({ toDo, setToDoList }) {

    const toggleCompleted = function (index) {
        const newToDoList = [...toDo];
        newToDoList[index].completed = !newToDoList[index].completed;
        setToDoList(newToDoList);
    }

    const deleteTask = (title) => setToDoList(toDo.filter(item => item.title !== title));

    return (
        <div className="container">
            <ul className="list-group">
                {
                    toDo.map(({ title }, index) => {
                        return <div key={index} className="row mb-2">
                            <li id={index} onClick={event => toggleCompleted(index)}
                                className={toDo[index].completed ? "list-group-item col-11 completed" : "list-group-item col-11"}>{index}: {title}
                            </li>
                            <button id={title} onClick={() => deleteTask(title)} className="btn btn-danger col-1">x</button>
                        </div>
                    })
                }
            </ul>
            <div className="completed mt-5">
                <h3 className="mb-3">Tareas completadas</h3>
                <ul className="list-group">
                    {
                        toDo.map(({ title, completed }, index) => {
                            return (
                                completed ? <li onClick={event => toggleCompleted(index)} key={index} className="list-group-item">{title}</li> : null
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
