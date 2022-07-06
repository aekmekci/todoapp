import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Form = ({todos, setTodos}) => {
    const [todoValue, setTodoValue] = useState('');

    const handleSubmit = (e) => {
        if(todoValue.trim() === '') {
            alert('Please enter a todo');
            return;
        }
        else if(todoValue.length < 3) {
            alert('Todo must be at least 3 characters long');
            return;
        }
        else if(todos.includes(todoValue)) {
            alert('Todo already exists');
            return;
        }
        setTodos([...todos, todoValue]);
        console.log("Todo added");
    }

    return <><h1>Todo App</h1>
    <form action=''>
        <input type="text" 
        id="input-form" 
        className='input-form'
        placeholder="Call mom and get some milk -_-"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        
        />
        <button className='btn'
        onClick={(e) => {
            e.preventDefault()
            handleSubmit()
            setTodoValue('')

        }}>Add</button>
    </form>
    </>
}


export default Form;