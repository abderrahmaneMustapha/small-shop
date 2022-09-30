import React from "react"
import Nav from "../../components/nav"
import Products from "./products"
import Cart from "./cart"

const Dashboard =  () => {
  return (
    <main>
      <Nav />
      <div>
        <div className="container-fluid pb-3">
          <div className="d-grid gap-4 p-5" style={{gridTemplateColumns: "1fr 1fr" }}>
            <Products />
            <Cart />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard