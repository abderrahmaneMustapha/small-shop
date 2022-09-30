import React, { useEffect } from "react"
import { List, ListItem } from "../../components/list"
import PriceTag from "../../components/tag"
import {calcProductTotalPrice, increaseQuantity, decreaseQuantity} from "../../redux/cartSlice"
import { useSelector, useDispatch } from 'react-redux'
import { cartProduct} from '../../types'

const Cart  = ()=> {
  const products:cartProduct[] = useSelector((state:any) => state.cart.products)
  const subTotal:number = useSelector((state:any)=> state.cart.subTotal)
  const total:number = useSelector((state:any)=> state.cart.total)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(calcProductTotalPrice())
  }, [products])

  return (
    <div className="bg-light p-5">
      <header className="mb-5">
        <h3 className="d-inline">Cart</h3>
        <span className="bi bi-cart3 fs-3 mx-4"></span>
      </header>

      <List>
        {products.map((product:cartProduct, index:number)=> (
          <ListItem
            key={index}
            title={product.name}
            imgSrc={product.img}
            imgCircle={true}
            transparent={true}
            border={"bottom"}
            body={
              <div>
                {product.newTotalPrice != 0 ?
                  <div className="w-100 fw-bold fs-3 text-end text-decoration-line-through text-danger">£{product.totalPrice.toFixed(2)}</div>
                :
                  <div className="w-100 fw-bold fs-3 text-end">£{product.totalPrice.toFixed(2)}</div>
                }
                <div className="row align-items-start justify-content-between">
                  <div className="col-8">
                    <span className="fw-bold">quantity: </span>
                    <button className="pb-4 btn btn-light btn-sm border rounded-circle border-dark mx-2" onClick={()=>{dispatch(decreaseQuantity(index))}} style={{width:"30px", height:"30px"}}>-</button>
                    <span className="fw-bold fs-5">{product.quantity}</span>
                    <button className="pb-4 btn btn-light btn-sm border rounded-circle border-dark mx-2" onClick={()=>{dispatch(increaseQuantity(index))}} style={{width:"30px", height:"30px"}}>+</button>
                  </div>
                  {product.newTotalPrice != 0  &&
                    <div className="fw-bold fs-3 text-end col-4">£{product.newTotalPrice.toFixed(2)}</div>
                  }
                </div>
              </div>
            }
          />
        ))}
      </List>
      <div className="text-end py-4">
       <PriceTag title="Subtotal" price={subTotal.toFixed(2)} />
       <PriceTag title="Discount" price={(subTotal - total).toFixed(2)} />
       <PriceTag title="Total" price={total.toFixed(2)} />
      </div>
    </div>
  )
}

export default Cart
