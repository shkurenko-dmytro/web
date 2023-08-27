import "./App.scss"
import Header from "./components/layout/header/Header"
import { SliderCars } from "./components/screens/home/slider/Slider"
import { sliderIMages } from "./components/screens/home/slider/data"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__container">
          <SliderCars images={sliderIMages} />
        </div>
      </main>
    </div>
  )
}

export default App
