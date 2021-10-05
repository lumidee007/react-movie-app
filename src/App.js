import { Header, MovieList, MovieInfo } from "./components";
import { useState} from "react"
export const API_KEY = "667de12c";
const axios = require('axios');

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState()
  const [search, setSearch] = useState()
  const [timeoutID, setTimeoutID] = useState();

  const fetchData = async (searchString) => {
    const res = await  axios.get(`http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
    setMovieList(res.data.Search)
  }


  const handleSearch = (e) => {
     setSearch(e.target.value) 
     const timeout = setTimeout(() => fetchData(e.target.value), 500)
     setTimeoutID(timeout)
     clearTimeout(timeoutID)
  }


  
  return (
    <div className="App">
      <Header handleSearch={handleSearch} search={search}/>
      {selectedMovie && <MovieInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
      <div className="container">
        {movieList?.length ? movieList.map(movie => (
          <MovieList  key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie}/>
        )): <h3 style={{textAlign: "center", fontSize: "45px", paddingTop: "250px"}}>No Movie Search</h3>}
      </div>
    </div>
  )
}


