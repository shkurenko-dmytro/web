import { IProductQuery } from "../interfaces/product.interface"
import { ICar } from "../interfaces/slider.interface"
import teslaService from "../services/tesla.service"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useSliderCars = () => {
  return useQuery(["cars"], () => teslaService.getData(), {
    select: ({ data }) => data.slice(0, 4),
  })
}

export const useProductCars = (query: IProductQuery) => {
  return useInfiniteQuery<ICar[], Error>({
    queryKey: ["products", query],
    queryFn: ({ pageParam = 1 }) => teslaService.getProducts(query, pageParam),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined
    },
  })
}
