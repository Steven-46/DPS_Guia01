import React,{useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    
    const [todo, setTodo] = useState([
        {producto: '',
        cantidad: ''}
    ])
    const [todos, setTodos] = useState([
        {producto: 'Producto', cantidad: 'Cantidad'}
    ])
    const handleChange = e => setTodo({...todo, [e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.cantidad == "" || todo.producto == ""){
            alert('Ninguno de los campos puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="text" name="producto" onChange={handleChange}/>
            <input type="text" name="cantidad" onChange={handleChange}/>
            <button onClick={handleClick}>agregar</button>
        </form>
        {
            todos.map((value, index) => (<Todo  todo={value.cantidad + " - " + value.producto} key={index} index={index} deleteTodo={deleteTodo}/>))
        }
        </>
    )
}
export default Form;