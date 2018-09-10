import React, { Component } from 'react'


class OrderItem extends Component {
  constructor(name, price, quantity) {
    super()
    this.name = name,
    this.price = price
    this.quantity = quantity
  }
}


export class Receipt extends Component {
  constructor(orderItems, totalPrice) {
    super()
    this.orderItems = []
    this.totalPrice = 0
  }

  addOrderItem(orderItem) {
    this.orderItems.push(orderItem)
    this.totalPrice += orderItem.price * orderItem.quantity
  }

  removeOrderItem(name) {
    const removedOi = this.orderItems.find(oi => oi.name == name)
    this.orderItems = this.orderItems.filter(oi => oi !== removedOi)
    this.totalPrice -= removedOi.price * removedOi.quantity
  }

  render() {
    const orderItem1 = new OrderItem("Bottle of water", 2, 10)
    const orderItem2 = new OrderItem("Machete", 150, 2)
    const orderItem3 = new OrderItem("Antiseptics", 15, 5)
    const orderItem4 = new OrderItem("Baloon", 5000, 1)

    let orderItems = [orderItem1, orderItem2, orderItem3, orderItem4]

    let r = new Receipt()

    orderItems.forEach(oi => r.addOrderItem(oi))

    // r.removeOrderItem("Baloon")

    let orderList = r.orderItems.map(oi =>
      <tr>
        <td>{ oi.name }</td>
        <td>{ oi.price }</td>
        <td>{ oi.quantity }</td>
        <td>{ oi.price * oi.quantity }</td>
      </tr>
    )

    return (
      <table>
        <tbody>
          <tr>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
          { orderList }
          <tr>
            <td id="total-price" colSpan={ 4 }>Total: { r.totalPrice }</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
