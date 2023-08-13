import { type CSSProperties, type FC, type MouseEventHandler } from "react"
import { EnumSliderArrow } from "./arrow.enums"
import clsx from "clsx"
import "./SliderArrow.scss"
import arrow from "../../../../../assets/images/arrow-icon.svg"

type TProps = {
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  style?: CSSProperties
  styles?: CSSProperties
  type?: EnumSliderArrow
}

const SliderArrow: FC<TProps> = ({
  className,
  onClick,
  style,
  styles,
  type,
}) => {
  return (
    <div
      className={clsx("slidercars__arrow", className)}
      onClick={onClick}
      style={{ ...style, ...styles }}
    >
      <div
        className={clsx("slidercars__arrow-button", {
          "slidercars__arrow-button_left": type === EnumSliderArrow.Previous,
          "slidercars__arrow-button_right": type === EnumSliderArrow.Next,
        })}
      >
        <img className="slidercars__arrow-icon" src={arrow} />
      </div>
    </div>
  )
}

export default SliderArrow
