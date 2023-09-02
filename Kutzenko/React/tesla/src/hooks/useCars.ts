import teslaService from "../services/tesla.service"
import { useQuery } from "@tanstack/react-query"

export const useSliderCars = () => {
  return useQuery(["cars"], () => teslaService.getData(), {
    select: ({ data }) => data.slice(0, 4),
  })
}

export const useProductCars = () => {
  return useQuery(["product"], () => teslaService.getData(), {
    select: ({ data }) => data,
  })
}
