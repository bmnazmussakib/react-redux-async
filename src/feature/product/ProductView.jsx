import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from './productSlice'
import { addToCart } from '../cart/cartSlice'

export default function ProductView() {
const {product, cart} = useSelector(state => state)
const dispatch = useDispatch()
console.log()



  return (
    <div>
        {/* <h1>Product List</h1> */}
        <button onClick={()=>dispatch(fetchProductData())}>Load Data</button>
        {
            product.product.map(product => {
                return (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                    </div>
                )
            })
        }

    </div>
  )
}
