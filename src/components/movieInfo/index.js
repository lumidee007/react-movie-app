import {Container, MovieImage, MovieInfoColumn, MovieInfoMain, MovieInfoSpan, Close} from "./styles/movieInfo"
import {useState, useEffect} from "react"
import { API_KEY } from "../../App"
const axios = require('axios');


export default function MovieInfo({selectedMovie, setSelectedMovie}) {

    const [movieDetails, setMovieDetails] = useState()

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`).then((res) => setMovieDetails(res.data))
    }, [selectedMovie])

            
    return (
        <Container>
            { movieDetails ?
            <>
            <MovieImage src={movieDetails.Poster}/>
            <MovieInfoColumn>
                <MovieInfoMain>Movie: <MovieInfoSpan>{movieDetails.Title}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>IMDB Rating: <MovieInfoSpan>{movieDetails.imdbRating}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>Year: <MovieInfoSpan>{movieDetails.Year}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>Language: <MovieInfoSpan>{movieDetails.Language}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>Release: <MovieInfoSpan>{movieDetails.Release}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>Runtime: <MovieInfoSpan>{movieDetails.Runtime}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>Genre: <MovieInfoSpan>{movieDetails.Genre}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>Director: <MovieInfoSpan>{movieDetails.Director}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>Actors: <MovieInfoSpan>{movieDetails.Actors}</MovieInfoSpan></MovieInfoMain>
                <MovieInfoMain>Plot: <MovieInfoSpan>{movieDetails.Plot}</MovieInfoSpan></MovieInfoMain>
            </MovieInfoColumn>
            <Close onClick={() => setSelectedMovie()}>X</Close>
            </> : 
            <h3 style={{margin:" 0 auto"}}> Loading...</h3>
            }
        </Container>
    )
  }