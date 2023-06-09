import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

class TextCls {
  sayHello = () => console.log('is cls')
}

class Index extends React.Component {
  state = { msg: 'hello' }
  sayHello = () => this.setState({ msg: '' })
  changeState = () => this.setState({})
  render() {
    return (
      <div style={{ marginTop: '20px' }} onClick={this.sayHello}>
        {this.state.msg} 点击
      </div>
    )
  }
}

function TextFun() {
  return 'is fun'
}

function FunComp() {
  const [msg, setMsg] = useState('init-msg')

  return <div onClick={() => setMsg('new msg')}>{msg}</div>
}

class ClsComp extends React.Component {
  state = {}
  static number = 1
  handleClick = () => console.log(111)
  componentDidMount() {
    console.log(this.props)
    console.log(ClsComp.number, ClsComp.number2)
  }

  render() {
    return <div onClick={this.handleClick}> render </div>
  }
}

ClsComp.number2 = 2
ClsComp.prototype.handleClick = () => console.log(2222)
createRoot(document.getElementById('root')).render(<ClsComp></ClsComp>)
