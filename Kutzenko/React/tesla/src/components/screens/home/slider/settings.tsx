import SliderArrow from "./slider-arrow/SliderArrow"
import { EnumSliderArrow } from "./slider-arrow/arrow.enums"
import { TSliderProps } from "./slider.types"

export const SLIDER_CARS_SETTINGS = (props: TSliderProps) => {
  const {
    arrows = true,
    className,
    dots = true,
    speed = 500,
    draggable = false,
    nextArrow,
    prevArrow,
    infinite = false,
  } = props

  return {
    settings: {
      arrows,
      className,
      dots,
      speed,
      draggable,
      infinite,
      nextArrow: arrows ? (
        <SliderArrow type={EnumSliderArrow.Next} />
      ) : (
        nextArrow
      ),
      prevArrow: arrows ? (
        <SliderArrow type={EnumSliderArrow.Previous} />
      ) : (
        prevArrow
      ),
    },
  }
}
