import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/styles/_reset.scss"
import "./assets/styles/global.scss"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Router from "./components/Router.tsx"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
)
