import { Header } from "../components/header/Header.jsx"
import { Card } from "../components/card/Card.jsx"
import { Footer } from "../components/footer/Footer.jsx"
import { useCharacters } from "../hooks/useAllCharacters.js"
import { useState } from "react"
import { Paginator } from '../Paginator.jsx';

export const Home = () => {
  const [page, setPage] = useState(1)
  const { data: charactersData, isFetched, isLoading } = useCharacters({ page })

  return (
    <>
      <Header />
      <div className="wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : isFetched ? (
          charactersData?.results?.map(el => (
            <Card key={el.id} data={el} />
          ))
        ) : (
          <p>Fetching...</p>
        )}
      </div>
      <Paginator
      pages={charactersData?.info?.pages}
      pressHandler={setPage}
      prev={charactersData?.info?.prev}
      next={charactersData?.info?.next}
      {...{page}}
      />
      {/* <Footer page={page} setPage={setPage} /> */}
    </>
  )
}
