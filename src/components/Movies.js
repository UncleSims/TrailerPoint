import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../Styles/Videos.css";
import "../Styles/NavBarStyle.css";
import { ContainerContext } from "./ContainerContext";
import TrailerMovies from "../trailers/TrailerMovies";

const Movies = () => {
  const {
    toggle,
    inputValue,
    trailer,
    setTrailer,
    AiFillPlayCircle,
    AiOutlineClose,
    NoImage,
    images,
  } = useContext(ContainerContext);
  const input = inputValue;
  const [moviesData, setMoviesData] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const shown = input ? "search" : "discover";
  const api = `https://api.themoviedb.org/3/${shown}/movie`;

  const MovieCall = async () => {
    const data = await axios.get(api, {
      params: {
        api_key: "bc003a47f50a4086982cc765a1716bba",
        query: input,
      },
    });

    const results = data.data.results;
    setMoviesData(results);
  };

  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 100);
     // eslint-disable-next-line
  }, [input]);

  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer(!trailer);
  };

  return (
    <>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="green"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => MoviesTitle(movie)}
                  />
                  <img
                    src={
                      movie.poster_path
                        ? `${images}${movie.poster_path}`
                        : NoImage
                    }
                    alt="NoImage"
                    onClick={() => MoviesTitle(movie)}
                  />
                  <h3
                    // id={movie.title.length > 28 ? "smaller-Text" : ""}
                    id="text"
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {movie.title}
                  </h3>
                </div>
              </>
            );
          })}
          {trailer ? "" : <TrailerMovies movieTitle={movieTitle} />}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={45}
            color={toggle ? "white" : "black"}
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;
