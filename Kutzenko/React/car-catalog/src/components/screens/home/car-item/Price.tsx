import React, { FC } from "react"

interface IPrice {
  price: number
}

const Price: FC<IPrice> = ({ price }) => {
  return (
    <p>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)}
    </p>
  )
}

export default React.memo(Price)
