import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./screens/product/Product"
import { SliderCars } from "./screens/home/slider/Slider"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SliderCars />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
