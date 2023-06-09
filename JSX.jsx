import React from 'react'
import { createRoot } from 'react-dom/client'
const list = ['1', 2, 3]

const root = document.getElementById('root')

const Comp = () => <div>is comp</div>

// function Index() {}

class Index extends React.Component {
  status = false // false
  renderFoot = () => <div> render func</div>

  render() {
    return (
      <div style={{ marginTop: '100px' }}>
        <div>i am div</div>
        <React.Fragment>fra</React.Fragment>
        text
        {list.map((it) => (
          <div key={it}>{it}</div>
        ))}
        <Comp></Comp>
        {this.status ? <Comp></Comp> : <div>三元运算</div>}
        {this.renderFoot()}
        <button onClick={() => console.log(this.render())}>
          打印render后的内容
        </button>
      </div>
    )
  }
}

createRoot(root).render(<Index />)
