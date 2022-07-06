import React from 'react'

const Item = ({todo, deleteTodo, id }) => {
  return (
    <li>{todo} <button className='remove-btn' onClick={()=>{
        deleteTodo(id)
        alert('Todo removed')
    }}>Remove</button></li>
  )
}

export default Item