import React, { Component, Fragment } from 'react'



const TodoItem = ({todo, markCompleted, handleDelete}) => {
   const { title,  id , isCompleted } = todo
  
   const pStyle = {
  backgroundColor: '#f0f0f0',
  padding: '15px 10px',
  margin: '2px 0',
  textDecoration: isCompleted ? 'line-through' : 'none',
  }

  const checkCompleted = () => {
    markCompleted(id)
  }
   
   const spanStyle = {
     float: 'right',
     padding: '3px',
     backgroundColor: '#45b086',
     color: 'white',
     borderRadius: '50%',
     cursor: 'pointer',
   }

    return (
      <Fragment >
    
      <p style={pStyle}>
        <input type='checkbox' checked={isCompleted} onChange={checkCompleted}/> {' '}
      {title}
       <span style={spanStyle} onClick={() => handleDelete(id)}>x</span> 
      </p>
      </Fragment>
    )
}


export default TodoItem

