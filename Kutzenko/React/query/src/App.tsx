import { useIsFetching, useMutation } from "@tanstack/react-query"
import { useTodos } from "./hooks/useTodos"
import { SyntheticEvent, useState } from "react"
import todoService from "./services/todo.service"

function App() {
  const { isLoading, data } = useTodos()

  const countFetching = useIsFetching()

  const [title, setTitle] = useState("")

  const { mutate } = useMutation(
    ["create todo"],
    (title: string) => todoService.create(title),
    {
      onSuccess() {
        setTitle("")
        alert("Todo created!")
      },
    }
  )

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    mutate(title)
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
      }}
    >
      <div>
        {!!countFetching && <h3>Loading...</h3>}
        <h2>Create todo:</h2>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Enter todo title"
              style={{ marginBottom: 10 }}
            />
          </div>
          <button>Create</button>
        </form>
      </div>
      <div>
        <h1>TODOS: </h1>

        {isLoading ? (
          <div>Loading...</div>
        ) : data?.length ? (
          data.map((todo) => (
            <div key={todo.id}>
              <b>{todo.id}:</b> {todo.title}
            </div>
          ))
        ) : (
          <h1>Data not found!</h1>
        )}
      </div>
    </div>
  )
}

export { App }
