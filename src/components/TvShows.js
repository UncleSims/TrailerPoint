import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ContainerContext } from "./ContainerContext";
import "../Styles/Videos.css";
import TrailerTvShows from "../trailers/TrailerTvShows";

const TvShows = () => {
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
  const shown = input ? "search" : "discover";
  const api = `https://api.themoviedb.org/3/${shown}/tv`;
  const [showData, setShowData] = useState([]);
  const [title, setTitle] = useState("show.name || show.title");

  const TvShows = async () => {
    const data = await axios.get(api, {
      params: {
        api_key: "bc003a47f50a4086982cc765a1716bba",
        query: input,
      },
    });
    const results = data.data.results;
    setShowData(results);
  };
  useEffect(() => {
    setTimeout(() => {
      TvShows();
    }, 50);
  }, [input]);

  const TvShowTitle = (show) => {
    setTitle(show.name || show.title);
    setTrailer(!trailer);
  };

  return (
    <>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {showData.map((show) => {
            return (
              <fragment key={show.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="green"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => TvShowTitle(show)}
                  />
                  <img
                    src={
                      show.poster_path
                        ? `${images}${show.poster_path}`
                        : NoImage
                    }
                    alt="NoImage"
                    onClick={() => TvShowTitle(show)}
                  />
                  <h3
                    id={show.name.length > 28 ? "smaller-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {show.name}
                  </h3>
                </div>
              </fragment>
            );
          })}
          {trailer ? "" : <TrailerTvShows title={title} />}
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

export default TvShows;
