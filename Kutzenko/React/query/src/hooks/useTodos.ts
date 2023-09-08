import { useQuery } from "@tanstack/react-query"
import todoService from "../services/todo.service"

export const useTodos = () => {
  return useQuery(["todos"], () => todoService.getAll(), {
    select: ({ data }) => data,
  })
}
