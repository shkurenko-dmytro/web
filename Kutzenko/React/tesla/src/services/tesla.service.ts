import axios from "axios"
import { ICar } from "../interfaces/slider.interface"
import { IProductQuery } from "../interfaces/product.interface"
class TeslaService {
  private URL_SLIDER_DATA = "https://tests-ipny.onrender.com/api/posts"
  private URL_PRODUCT_DATA = "https://tests-ipny.onrender.com/api/loadProducts"

  async getData() {
    return axios.get<ICar[]>(this.URL_SLIDER_DATA)
  }
  
  async getProducts(query: IProductQuery, pageParam: number) {
    return axios
        .get<ICar[]>(this.URL_PRODUCT_DATA, {
          params: {
            start: (pageParam - 1) * query.pageSize,
            limit: query.pageSize,
          },
        })
        .then((res) => res.data)
  }
}

export default new TeslaService()
