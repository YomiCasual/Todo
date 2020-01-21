import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

    const divStyle = {
      backgroundColor: '#45b086', 
      color: 'white',
      margin: '5px 0px',
      padding: '10px',
      textAlign: 'center'
    }
    
  return (
   <div style={divStyle}>
   <h1> TodoList </h1>
   <Link style={linkStyle} to="/"> Home</Link> |  
   <Link  style={linkStyle} to="/about"> About</Link> |
   <Link  style={linkStyle} to="/todos"> Todo(s)</Link> 
   </div>
  )
}

const linkStyle = {
  textDecoration: 'none', 
  color: 'black',
  margin: '10px 8px 0px',
  backgroundColor: 'yellow', 
  padding: '8px',
  borderRadius: '10%'

}


export default Header 


