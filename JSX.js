'use strict'

const arrayList = ['react', 'vue']
const TextCmp = <div>text comp</div>

// class Index extends React.Component {
//   status = false
//   renderFoot = () => <div>render foot</div>

//   render() {
//     return (
//       <div>
//         <div>element type</div>
//         <React.Fragment>
//           <div>fragment type</div>
//         </React.Fragment>
//         {/* text 文本类型 */}
//         text type
//         {/* 数组节点 */}
//         {arrayList.map((item) => (
//           <div key={item}> {item} </div>
//         ))}
//         <TextCmp></TextCmp>
//         {/* 函数执行 */}
//         {this.renderFoot()}
//         <button
//           onClick={() => {
//             console.log('button click')
//           }}
//         >
//           button click
//         </button>
//       </div>
//     )
//   }
// }

function Index() {
  return <button onClick={() => console.log('click index')}>click index</button>
}

// 取到根节点
const rootNode = document.getElementById('root')
// 创建dom-root
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(Index))
