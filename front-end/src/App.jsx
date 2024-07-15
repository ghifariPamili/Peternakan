import LandingPage from "./Pages/LandingPage"
import { Route, Routes   } from "react-router-dom"

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={ <LandingPage/> } />
        </Routes>
    </div>
  )
}

export default App