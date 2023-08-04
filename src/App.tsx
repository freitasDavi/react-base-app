import { RouterProvider } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext"
import { router2 } from "./router"

function App() {


  return (
    <AuthContextProvider>
      <RouterProvider router={router2} />
    </AuthContextProvider>
  )
}

export default App
