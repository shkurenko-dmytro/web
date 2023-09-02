import share from "../../../../../assets/images/share-icon.svg"
import type { FC } from "react"
import "./Info.scss"

const Info: FC<ICarInfo> = ({ car }) => {
  return (
    <div className="slidecars__info info">
      <div className="info__body">
        <div className="info__characteristic-block">
          <dl className="info__characteristic">
            <dd className="info__characteristic-value">{car.range}</dd>
            <dt className="info__characteristic-name">Range</dt>
          </dl>
          <dl className="info__characteristic">
            <dd className="info__characteristic-value">{car.top_speed}</dd>
            <dt className="info__characteristic-name">Top Speed</dt>
          </dl>
          <dl className="info__characteristic">
            <dd className="info__characteristic-value">{car.mph}</dd>
            <dt className="info__characteristic-name">0.60 mph</dt>
          </dl>
        </div>
        <div className="info__links">
          <a href="#" className="info__button">
            Buy Now
          </a>
          <a href="#" className="info__share">
            <img src={share} className="info__share-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info
