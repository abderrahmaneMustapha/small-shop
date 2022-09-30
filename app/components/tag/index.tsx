import React from "react"

const PriceTag = ({title, price}: any) => {
  return (
    <div className="mb-2">
      <div className="text-muted fw-bold fs-5">{title}</div>
      <div className="text-dark fw-bold fs-5">£{price}</div>
    </div>
  )
}

export default PriceTag
