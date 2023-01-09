import {useState, createContext} from 'react';
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai';
import NoImage from './Noimage.jpg';

export const ContainerContext = createContext()

function ContainerContextProvider(props){
    const [toggle, setToggle] = useState(true);
    const [inputValue, setInputValue] = useState("")
    const [trailer, setTrailer] = useState(true)
    const [movieTitle, setMovieTitle] = useState("")
    const images = " https://image.tmdb.org/t/p/w500"

    const handleClick = (e) =>{
          setToggle(!toggle)
         }
    
    const inputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const MoviesTitle = (movie) => {
        setMovieTitle(movie.title)
        setTrailer(!trailer)
      }

    const values = {toggle, inputValue, handleClick, inputChange, 
        trailer, setTrailer, AiFillPlayCircle, AiOutlineClose,
        NoImage, images, movieTitle, setMovieTitle, MoviesTitle}
        
    return(
        <ContainerContext.Provider value={values}>
            {props.children}
        </ContainerContext.Provider>
    )
}

export default ContainerContextProvider;