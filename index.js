import React from 'react'
import ReactDom from 'react-dom'

import Hello from './src/Hello'

import Arithmetic from './src/arithmeticModule'

const a = new Arithmetic()
console.log(a.sum(12, 21))
console.log(a.subtract(33, 21))
console.log(a.multiply(11, 11))
console.log(a.divide(12, 2.4))

ReactDom.render(
  <Hello />,
  document.getElementById('root')
)
