import React from 'react'
import { createRoot } from 'react-dom/client'
class Persion extends React.Component {
  componentDidMount() {
    console.log(11111)
  }

  func() {}

  render() {
    return <div>is persion </div>
  }
}

class Child extends Persion {
  componentDidMount() {
    console.log(this)
  }
  render() {
    return <div> child</div>
  }
}

createRoot(document.getElementById('root')).render(<Child></Child>)
