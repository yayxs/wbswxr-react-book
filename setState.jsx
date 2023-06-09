// const { Component } = require("react");

import React from 'react'
import { createRoot } from 'react-dom/client'

class Form extends React.Component {
  state = {
    name: '123'
  }
  handleNameChange = (e) => {
    const newName = e.target.value
    this.setState({
      name: newName
    })
    console.log(this.state.name)
  }
  handleNameChange1 = (e) => {
    this.setState((prevState) => {
      console.log('prevState', prevState)
      return {
        name: e.target.value
      }
    })
    console.log(this.state.name)
  }

  render() {
    return (
      <>
        <input
          type='text'
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <p>{this.state.name}</p>

        <div>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleNameChange1}
          />
          <p>{this.state.name}</p>
        </div>
      </>
    )
  }
}

class Index extends React.Component {
  state = {
    number: 0
  }

  handleAdd = () => {
    this.setState(
      {
        number: 1
      },
      () => {
        console.log('this.this.state..', this.state.number)
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleAdd()}>{this.state.number}</button>
      </div>
    )
  }
}

class Counter extends React.Component {
  state = {
    number: 0
  }
  handleClick = () => {
    setTimeout(() => {
      this.setState({ number: this.state.number + 1 }, () => {
        console.log('cb1', this.state.number)
      })
      console.log(this.state.number)
      this.setState({ number: this.state.number + 1 }, () => {
        console.log('cb2', this.state.number)
      })
      console.log(this.state.number)
      this.setState({ number: this.state.number + 1 }, () => {
        console.log('cb3', this.state.number)
      })
      console.log(this.state.number)
    })
  }
  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={this.handleClick}>number ++</button>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<Counter />)
