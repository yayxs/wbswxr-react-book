import React from 'react'
import { createElement } from 'react'

import { createRoot } from 'react-dom/client'

function Index({ name }) {
  return createElement(
    'h1',
    { className: 'cls' },
    'hello',
    createElement('i', null, name)
  )
}

createRoot(document.getElementById('root')).render(
  <Index name={'name'}></Index>
)
