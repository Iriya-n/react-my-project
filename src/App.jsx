import { Header } from "./components/header/Header.jsx"
import { Card } from "./components/card/Card.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { useCharacters } from "./hooks/useAllCharacters.js"
import { useState } from "react"
import "./App.css"

export const App = () => {
  const [page, setPage] = useState(1)
  const { data: charactersData, isFetched, isLoading } = useCharacters({ page })

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/character/:characterId" element={<></>}/>
    </Routes>
  )
}

export default App