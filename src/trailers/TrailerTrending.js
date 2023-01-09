import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovie.css';

const TrailerTrending = (props) => {
    const title = props.trendTitle
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] = useState("");

    function handleSearch() {
        setVideo(title)
        movieTrailer(video).then(res => {setVideoURL(res)})       
    } 
    useEffect(() => {
        setTimeout(() => {
            handleSearch()
        }, 50) 
    }, [videoURL])
    
    return ( 
        <>
            <div className="Container"></div>
            <div className="player">
                <ReactPlayer url={videoURL} className="reac-player" controls={true} width={"60vw"} height={"60vh"}
                style={{ 
                    position: "fixed", 
                    right: 280,
                    top: 130,

                }}
                />
            </div>
        </>
     );
}
 
export default TrailerTrending;