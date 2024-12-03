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
    <>
      <Header />
      <div className="wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : isFetched ? (
          charactersData?.map(el => (
            <Card key={el.id} data={el} />
          ))
        ) : (
          <p>Fetching...</p>
        )}
      </div>
      <Footer page={page} setPage={setPage} />
    </>
  )
}
