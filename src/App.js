import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoList from './components/Todos/TodoList'
import Input from './components/Input/Input'
import Header from './components/Header/Header';
import About from './components/Pages/About'


export default class App extends Component {
  state = {
      todos: [
        { id: Math.random()* 100000, title: 'Work', isCompleted: false},
        { id: Math.random()* 100000, title: 'Movies', isCompleted: false},
        { id: Math.random()* 100000, title: 'Read', isCompleted: false},
      ]
    }


markCompleted = (id) => {
  this.setState({ 
   todos: this.state.todos.map(todo => {
     if (todo.id === id) {
       todo.isCompleted = !todo.isCompleted;
     }
     return todo
   })  
  })
  }

  numberOfUndone = () => {
    const number = this.state.todos.filter(todo => !todo.isCompleted).length || 0
    
     return ( number === 0 ? 'You have Finished your Todos' : number + ' left to be done' )
  }

   itemsUndone = () => {
    const todos = this.state.todos.filter(todo => !todo.isCompleted)
    return todos
  }

handleDelete = (id) => {
  this.setState({
    todos: this.state.todos.filter(todo => todo.id !== id)
  })
}

handleAdd = (title) => {
  let newItem = { title, id: Math.random()* 100000, isCompleted: false  }
  this.setState( prevState => ({
    todos: [...prevState.todos, newItem]
  })
  )
}

  render() {

    const { todos } = this.state
    return (
      <Router>
      <div>
       <Header />
      <Route exact path="/" render={ props => (
        <>    
      <Input handleAdd={this.handleAdd} />

      < TodoList 
      todos={todos} 
      markCompleted={this.markCompleted} 
      handleDelete={this.handleDelete} />

        </>
      )}
      /> 

     <Route path="/about" render={props => (
       <>
       <About />
       </>
     )}/>

     <Route path="/todos" render={props => (
      
       <>
       <TodoList 
       todos={this.itemsUndone()}
       markCompleted={this.markCompleted} 
        handleDelete={this.handleDelete}
       />
        <p>{this.numberOfUndone()} </p>
       </>
     )}/>
      </div>
      </Router>
    )
  }
}

