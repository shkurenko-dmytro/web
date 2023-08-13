import "./Slider.scss"
import { memo } from "react"
import Slider from "react-slick"
import isNil from "lodash.isnil"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import type { FC } from "react"
import type { TSliderProps } from "./slider.types"
import { SLIDER_CARS_SETTINGS } from "./settings"
import Info from "./info/Info"

const SliderCarsComponent: FC<TSliderProps> = (props) => {
  const { alt = "", images } = props
  const settings = SLIDER_CARS_SETTINGS(props).settings
  const defaultImage =
    "https://img.freepik.com/premium-photo/default_162590-14015.jpg?size=626&ext=jpg&ga=GA1.2.219912859.1691923051&semt=sph"

  return !isNil(images) ? (
    <Slider {...settings}>
      {images.map((image, index) => {
        return (
          <div className="slidercars__item" key={index}>
            <div className="slidecars__body">
              <p className="slidercars__name">Model S</p>
              <div className="slidecars__image">
                <img alt={alt} src={image} />
              </div>
            </div>
            <Info />
          </div>
        )
      })}
    </Slider>
  ) : (
    <img alt={alt} src={defaultImage} />
  )
}

export const SliderCars = memo(SliderCarsComponent)
