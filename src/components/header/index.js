import { Container, SearchBox, AppName, InputBox } from "./styles/header";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

export default function Header({ search, handleSearch }) {


    const SearchStyle = {
        display: "flex",
        flexDirection: "row", 
        justifyContent: "center",
        fontSize: "30px",
        fontWeight: "normal",
        color: "black"
    }


    return (
        <Container>
            <AppName><LocalMoviesIcon style={{color: "yellow" }}/>React Movie App</AppName>
            <SearchBox>
                <SearchSharpIcon style={SearchStyle}/>
                <InputBox 
                type="text" 
                placeholder="Search Movie" 
                value={search}
                onChange={handleSearch} 
                />
            </SearchBox>
        </Container>
    )
}

