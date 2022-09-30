import React from "react"


const Stars = ({rating}: any) => {
  const stars = new Array(5).fill(0)
  return (
    <span title={rating}>
    {stars.map((_, index) => (
      <i key={index}
        className={`
          bi fs-5
          bi-star-${rating - index === 0.5 ? "half" : "fill"}
          ${index <= rating  && "text-warning"}
        `}
      />
    ))}
    </span>

  )
}

export {Stars}