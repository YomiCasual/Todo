import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'


const TodoList = ({ todos, markCompleted, handleDelete }) => {
  return (
    <Fragment>
    {todos.map(todo => (
      <TodoItem 
      key={todo.id} 
      todo={todo} 
      markCompleted={markCompleted}
      handleDelete={handleDelete}
      />
    ))}
    </Fragment>
  )
}


export default TodoList 

