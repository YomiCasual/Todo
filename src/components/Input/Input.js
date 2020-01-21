import React, { Component, Fragment } from 'react'


class Input extends Component {
  
  state = {
    title: ''
  }

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    })
  }

  onSubmit = (e) => {
    const { handleAdd } = this.props
    e.preventDefault()
    const { title } = this.state
   handleAdd(title)
    this.setState({
      title: ''
    })

  }

 render() {

   const { title } = this.state
    return (
      <Fragment >
        <form onSubmit={this.onSubmit}>
          <input style={{ width: '70vw', padding: 3}} 
           type='text'
           onChange={ this.handleChange('title')} 
           value={title} 
           placeholder='Enter your text'/> 
          <input type='submit' value='Submit' style={inputStyle} />
        </form>
      </Fragment>
    )
   }
}

const inputStyle = {
 padding: 5, 
 marginLeft: 4, 
 backgroundColor: '#45b086',
 border: 'none',
 color: 'white',
 width: '23vw',
 cursor: 'pointer'
  }


export default Input

