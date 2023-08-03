import { RouterProvider, useLocation, useNavigate } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext"
import { router } from "./router"
import { history } from "./lib/history"

function App() {


  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
