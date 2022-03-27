import { useState } from 'react';
import { useFetch } from './components/hooks/useFetch';
import Input from './components/Input';
import ToDoList from './components/ToDoList';

function App() {

  const [toDoList, setToDoList] = useState([]);

  const API_TODOS = 'https://jsonplaceholder.typicode.com/todos';

  useFetch(API_TODOS, setToDoList); // Hook personalizado en ./components/hooks/useFetch';


  return (
    <div className="container py-4">
      <h1>To-Do List</h1>
      <Input toDo={toDoList} setToDoList={setToDoList} />
      <ToDoList toDo={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;