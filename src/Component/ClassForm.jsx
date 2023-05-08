/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

class ClassForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
        }

        this.handleChange =(e) => {
            e.preventDefault()
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        this.handleSubmit =(e) => {
            e.preventDefault()
            console.log(this.state)
        }
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
           <label>Name</label>
           <input type = "text" name='name' onChange={this.handleChange}></input>
           <br></br>
           <br></br>
           <label>Email</label>
           <input type = "email" name='email' onChange={this.handleChange}></input>
           <br></br>
           <br></br>
           <label>Password</label>
           <input type = "password" name='password' onChange={this.handleChange}></input>
           <br></br>
           <br></br>

           <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ClassForm
