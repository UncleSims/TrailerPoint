import "../Styles/TrailerMovie.css";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const TrailerMovies = (props) => {
  const moviesTitle = props.movieTitle;
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  function handleSearch() {
    setVideo(moviesTitle);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  useEffect(() => {
    setTimeout(() => {
      handleSearch();
    }, 50);
  }, [videoURL]);

  return (
    <>
      <div className="Container"></div>
      <div className="player">
        <ReactPlayer
          url={videoURL}
          className="reac-player"
          controls={true}
          width={"60vw"}
          height={"60vh"}
          style={{
            position: "fixed",
            right: "18%",
            top: 130,
          }}
        />
      </div>
    </>
  );
};

export default TrailerMovies;
