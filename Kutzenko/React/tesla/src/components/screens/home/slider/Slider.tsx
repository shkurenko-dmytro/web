import "./Slider.scss"
import { memo } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import type { FC } from "react"
import type { TSliderProps } from "./slider.types"
import { SLIDER_CARS_SETTINGS } from "./settings"
import Info from "./info/Info"
import { useSliderCars } from "../../../../hooks/useCars"
import Header from "../../../layout/header/Header"

const SliderCarsComponent: FC<TSliderProps> = (props) => {
  const settings = SLIDER_CARS_SETTINGS(props).settings

  const { isLoading, data } = useSliderCars()

  return isLoading ? (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  ) : data?.length ? (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__container">
          <Slider {...settings}>
            {data?.map((car) => {
              return (
                <div className="slidercars__item" key={car._id}>
                  <div className="slidecars__body">
                    <p className="slidercars__name">Model {car.model}</p>
                    <div className="slidecars__image">
                      <img
                        src={car.image}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null
                          currentTarget.src = "/teslaX.png"
                        }}
                      />
                    </div>
                  </div>
                  <Info car={car} />
                </div>
              )
            })}
          </Slider>
        </div>
      </main>
    </div>
  ) : (
    <div>Data not found</div>
  )
}

export const SliderCars = memo(SliderCarsComponent)
