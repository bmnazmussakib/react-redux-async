import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from './cartSlice'

export default function CartView() {

    const { cart, quantity } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log(cart)

    return (
        <div>
            Total: {cart.length}
            <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
            <ul>
                {
                    cart.map(item => <li>{item.name} - {item.quantity} <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button></li>)
                }
            </ul>
        </div>
    )
}
