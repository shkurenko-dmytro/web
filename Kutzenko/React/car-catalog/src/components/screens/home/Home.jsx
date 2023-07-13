import CarItem from './car-item/CarItem'
import { cars } from './cars.data.js'

function Home() {
  return (
    <div>
      <h1>
        Cars Catalog
      </h1>
      <div>
        {cars.length ? cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))
          : <p>There are no cars</p>
        }
      </div>
    </div>
  )
}

export default Home
