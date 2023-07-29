import styles from "./../Home.module.css"
import { Link } from "react-router-dom"
import Price from "./Price"
import { MouseEvent, useState } from "react"
import { ICar } from "../../../../types/car.interface"

interface ICarItem {
  car: ICar
}

function CarItem({ car }: ICarItem): JSX.Element | null {
  const [count, setCount] = useState(0)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCount((prev) => prev + 1)
  }

  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <button onClick={handleClick}>Click {count}</button>
        <Price price={car.price} />
        <Link className="btn" to={`/car/${car.id}`}>
          Read more
        </Link>
      </div>
    </div>
  )
}

export default CarItem
