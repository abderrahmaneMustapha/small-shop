import React from "react"

const borderCalss:any = {
  bottom: "border border-top-0 border-start-0 border-end-0 border-1 border-dark rounded-0",
  all: "border"
}

const List =  ({children, spacing}: any) => {
  return (
    <div className={`list-group row-spacing-${spacing}`}>
      {children}
    </div>
  )
}

const ListItem  = ({footer, body, title, header, imgSrc, shadow, border, imgCircle, transparent}: any) => {
  return (
    <div className={`list-group-item ${transparent && "bg-transparent"} ${shadow && "shadow"} ${border && borderCalss[border]}`}>
      <div className="d-flex w-100 justify-content-between">
        <div className="w-25 m-2">
          <img src={imgSrc}
                className={`d-block w-100 ${imgCircle && "rounded-circle border border-secondary border-1"}`} alt="..." />
        </div>
        <div className="w-75 list-group-item-content">
          <div className="d-flex w-100 justify-content-between list-group-item-header align-items-center">
            <h5 className="mb-1">{title}</h5>
            {header && header.extra()}
          </div>
          <div className="list-group-item-body">
            {body}
          </div>
          <div className="list-group-item-footer">
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}

export {List, ListItem}