import "./Product.scss"
import type { FC } from "react"
import Header from "../../layout/header/Header"
import { useProductCars } from "../../../hooks/useCars"
import ProductItem from "./product-item/ProductItem"

const Product: FC = () => {
  const { isLoading, data } = useProductCars()

  return isLoading ? (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  ) : data?.length ? (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__container">
          <section className="main__product product">
            <h1 className="product__title">Product</h1>
            <div className="product__container">
              {data?.map((car) => {
                return <ProductItem car={car} key={car._id}/>
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : (
    <div>Data not found</div>
  )
}

export default Product
