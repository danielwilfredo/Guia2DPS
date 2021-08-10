import React , {useState} from 'react';
import Todo from "./Todo"

const Form = () => {
    //espacio para escribir codigo js

    const [todo, setTodo]=useState({});

    //funcion para agregar el texto del imput a nuestro state
    const handleChange = e=>{
        setTodo({[e.target.name]: e.target.value})
    }

    const handleClick = e => {

        if(Object.keys(todo).length===0 || todo.todo.trim()==='')
        {
            alert("El campo no puede estar vacio");
            return;
        }
        setTodos([...todos,todo])
    }

    const deleteTodo=indice=>{
        const newTodos=[...todos];
        newTodos.splice(indice,1);
        setTodos(newTodos);

    }

    const [todos, setTodos]=useState([
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}
    ])
    return (
        <>
        <form onSubmit={e=>e.preventDefault()}>
            <label>Agregar tarea</label>
            <input 
            type="text"
            name="todo"
            onChange={handleChange}/>
            <button onClick={handleClick}>
                agregar
            </button>


        </form>



        {
            todos.map((value, index)=>(<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>))
        }
        </>
        
      );
}
 
export default Form;