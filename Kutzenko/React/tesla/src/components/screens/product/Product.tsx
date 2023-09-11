import "./Product.scss"
import type { FC } from "react"
import Header from "../../layout/header/Header"
import { useProductCars } from "../../../hooks/useCars"
import ProductItem from "./product-item/ProductItem"
import React from "react"

const Product: FC = () => {
  const pageSize = 3
  const {
    data,
    error,
    fetchNextPage,
    status,
    isFetchingNextPage,
    hasNextPage,
  } = useProductCars({ pageSize })

  return status === "loading" ? (
    <div className={`preloader`}>
      <div className="loader"></div>
    </div>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__container">
          <section className="main__product product">
            <h1 className="product__title">Product</h1>
            <div className="product__container">
              {data.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.map((car) => (
                    <ProductItem car={car} key={car._id} />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="product__button-box">
              <button
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}
                className={`product__button`}
              >
                {isFetchingNextPage
                  ? "Loading..."
                  : hasNextPage
                  ? "Load More"
                  : "Nothing more to load"}
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Product
