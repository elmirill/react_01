import React, { Component } from 'react'
import Arithmetic from './arithmeticModule'

export default class Calc extends Component {
  render() {
    const a = new Arithmetic()
    return (
      <ul>
        <li style={{fontWeight: '700'}}>14 + 2 = { a.sum(14, 2) }</li>
        <li style={{color: 'purple'}}>14 * 2 = { a.multiply(14, 2) }</li>
      </ul>
    )
  }
}
