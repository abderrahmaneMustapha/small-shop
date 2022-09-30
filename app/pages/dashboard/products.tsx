import React from "react"
import { List, ListItem } from "../../components/list"
import { Stars } from "../../components/rating"
import { disableAlert, addProduct } from "../../redux/cartSlice"
import { useSelector, useDispatch } from 'react-redux'
import { cartProduct, product } from '../../types'

const Products  = ()=> {
  const products:product[] = useSelector((state:any) => state.products.products)
  const alert:boolean = useSelector((state:any) => state.cart.alert)
  const dispatch = useDispatch()

  const handleAlert = () => {
      setTimeout(function() {
        dispatch(disableAlert())
      }, 3000);
  }

  const addToCart = (product: product) => {
    const cartProduct: cartProduct =  {
      id:product.id,
      product: product.product,
      name: product.name,
      img: product.img,
      quantity: 1,
      price: product.price,
      totalPrice:0,
      newTotalPrice:0,
    }

    dispatch(addProduct(cartProduct))

    if (!alert) {
      handleAlert()
    }
  }

  return (
    <div className="pt-5">
      <header className="mb-5">
        <h3 className="mb-5 ">Products</h3>
      </header>
      {alert &&
        <div className="alert alert-danger" role="alert">
          Product already exists, and can not be added to cart
        </div>
      }
      <List spacing={3}>
        {products.map((product:product, index:number)=> (
        <ListItem
          key={index}
          title={product.name}
          shadow={true}
          header={{
            extra: () => <Stars rating={product.rating} />
          }}
          imgSrc={product.img}
          body={
            <div className="d-flex justify-content-between align-items-start">
              <p className="mb-1 fs-6 text-muted w-75">{product.description}</p>
              <span className="fw-bold fs-4">£{product.price.toFixed(2)}</span>
            </div>
          }
          footer={<button className="btn btn-primary btn-sm" onClick={()=>addToCart(product) }>ADD TO CART</button>}
        /> ))}
      </List>
    </div>
  )
}

export default Products
