import React from 'react'
import Item from './Item'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className='list-item'>
        <ul>
            {todos.map((todo, index) => (
                <Item id={index} todo={todo} key={index} deleteTodo={deleteTodo} />
                
            ))}
        </ul>
        </div>
  )
}

export default TodoList