import "./Product.scss"
import type { FC } from "react"
import Header from "../../layout/header/Header"
import { useProductCars } from "../../../hooks/useCars"
import ProductItem from "./product-item/ProductItem"
import React from "react"

const Product: FC = () => {
  const pageSize = 3
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useProductCars({ pageSize })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  
  return (
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
            <button
              disabled={isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Product
