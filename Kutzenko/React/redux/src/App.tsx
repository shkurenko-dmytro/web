import { MouseEvent, useState } from "react"
import CreateRecipe from "./components/create-recipe/CreateRecipe"
import Header from "./components/header/Header"
import RecipeItem from "./components/recipe-item/RecipeItem"
import User from "./components/user/User"
import { useGetRecipesQuery } from "./store/api/api"

const userId = null

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const [queryTerm, setQueryTerm] = useState("")

  const { isLoading, data } = useGetRecipesQuery(queryTerm)
  // undefined, {
  //   skip: !userId,
  // }

  const handleSearch = () => {
    setQueryTerm(searchTerm)
  }

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />

      <div style={{ padding: 10 }}>
        <p>If you wanna find:</p>
        <div>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term"
            style={{ marginRight: 10 }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </section>
  )
}

export default App
