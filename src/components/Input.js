import { useState } from "react";
export default function Input({ setToDoList }) {

    const [newTodo, setNewTodo] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setToDoList(currentTodos => [{ title: newTodo, completed: false }, ...currentTodos]);
        setNewTodo('');
    }

    return (
        <div className="pb-3">
            <form onSubmit={event => handleSubmit(event)}>
                <input
                    placeholder="Introduce una nueva tarea"
                    type="text" className="form-control" id="newTodo"
                    onChange={event => setNewTodo(event.target.value)}
                    value={newTodo}
                />
                <button type="submit" className="btn btn-primary mt-3">Añadir a la lista</button>
            </form>
        </div>
    )
}
