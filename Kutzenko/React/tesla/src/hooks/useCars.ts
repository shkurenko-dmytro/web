import axios from "axios"
import teslaService from "../services/tesla.service"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useSliderCars = () => {
  return useQuery(["cars"], () => teslaService.getData(), {
    select: ({ data }) => data.slice(0, 4),
  })
}

interface PostQuery {
  pageSize: number
}

export const useProductCars = (query: PostQuery) => {
  return useInfiniteQuery<ICar[], Error>({
    queryKey: ["products", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://tests-ipny.onrender.com/api/loadProducts", {
          params: {
            start: (pageParam - 1) * query.pageSize,
            limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined
    },
  })
}
