import React from 'react'
import ReactDom from 'react-dom'

import { Hello } from './src/Hello'
import Calc from './src/Calc'

import { Receipt } from './src/Receipt'

ReactDom.render(
  <Hello />,
  document.getElementById('hello')
)

ReactDom.render(
  <Calc />,
  document.getElementById('calc')
)

ReactDom.render(
  <Receipt />,
  document.getElementById('receipt')
)
