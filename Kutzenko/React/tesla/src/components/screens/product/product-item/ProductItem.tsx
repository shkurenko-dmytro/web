import type { FC } from "react"
import { ICarInfo } from "../../../../interfaces/slider.interface"

const ProductItem: FC<ICarInfo> = ({ car }) => {
  return (
    <a href="#" className="product__item">
      <div className="product__image">
        <img
          src={car.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = "/teslaX.png"
          }}
        />
      </div>
      <div className="product__item-body">
        <div className="product__description-box">
          <dl className="product__description">
            <dt className="product__name">Model:</dt>
            <dd className="product__name-value">
              <h2 className="product__subtitle">Tesla {car.model}</h2>
            </dd>
          </dl>
          <dl className="product__description">
            <dt className="product__name">Range:</dt>
            <dd className="product__name-value">{car.range}</dd>
          </dl>
          <dl className="product__description">
            <dt className="product__name">Top Speed:</dt>
            <dd className="product__name-value">{car.top_speed}</dd>
          </dl>
          <dl className="product__description">
            <dt className="product__name">Mph:</dt>
            <dd className="product__name-value">{car.mph}</dd>
          </dl>
        </div>
      </div>
    </a>
  )
}

export default ProductItem
