import teslaService from "../services/tesla.service"
import { useQuery } from "@tanstack/react-query"

export const useSliderCars = () => {
  return useQuery(["cars"], () => teslaService.getSliderData(), {
    select: ({ data }) => data.slice(0, 4),
  })
}
