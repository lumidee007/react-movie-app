import {MovieMain, MovieImage,  MovieName, MovieInfo,MovieText} from "./styles/main"


export default function MovieList({ movie, setSelectedMovie }) {
  let {imdbID, Title, Poster, Year, Type} = movie;

  return (
          <MovieMain onClick={() => setSelectedMovie(imdbID)} >
            <MovieImage src={Poster} alt={Title}/>
            <MovieName>{Title}</MovieName>
            <MovieInfo>
              <MovieText>Year: {Year}</MovieText>
              <MovieText>Type: {Type}</MovieText>
            </MovieInfo>
          </MovieMain> 
  )
}



