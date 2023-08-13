import SliderArrow from "./slider-arrow/SliderArrow"
import { EnumSliderArrow } from "./slider-arrow/arrow.enums"
import { TSliderProps } from "./slider.types"

export const SLIDER_CARS_SETTINGS = (props: TSliderProps) => {
  const {
    arrows = false,
    className,
    dots = false,
    fade = false,
    speed = 500,
    swipeToSlide = false,
    nextArrow,
    prevArrow,
    infinite = false
  } = props

  return {
    settings: {
      arrows,
      className,
      dots,
      fade,
      speed,
      swipeToSlide,
      infinite,
      nextArrow: arrows ? (
        <SliderArrow styles={{ right: "5px" }} type={EnumSliderArrow.Next} />
      ) : (
        nextArrow
      ),
      prevArrow: arrows ? (
        <SliderArrow
          styles={{ left: "5px" }}
          type={EnumSliderArrow.Previous}
        />
      ) : (
        prevArrow
      ),
    },
  }
}
