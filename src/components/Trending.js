import axios from 'axios';
import { useEffect, useState, useContext } from "react";
import { ContainerContext } from './ContainerContext';
import '../Styles/Videos.css';
import TrailerTrending from '../trailers/TrailerTrending';


const Trending = () => {
  const {toggle, trailer, setTrailer, 
    AiFillPlayCircle, AiOutlineClose, NoImage, images } = useContext(ContainerContext)
  const api = "https://api.themoviedb.org/3"
  const trendsShown ="/trending/all/week" 
  const [trendingData, setTrendingData] = useState([])
  const [trendTitle, setTrendTitle] = useState("")

  const Trends = async() => {
    const data = await axios.get(`${api}${trendsShown}`,{
      params: {
        api_key: 'bc003a47f50a4086982cc765a1716bba',
      }
    })
  const results = data.data.results
    setTrendingData(results)
  }
  useEffect(() => {
    setTimeout(() => {
      Trends()
    }, 50)
  }, [])

  const TrendsTitle = (trend) => {
    setTrendTitle(trend.title)
    setTrailer(!trailer)
  }

    return (
      <>
        <div className={toggle ? "mainBgColor" : "secondaryBgColor"} >   
          <div className='movies-container'>
            {trendingData.map((trend) => {
              return(
                <>
                  <div id={trailer ? "container" : "NoContainer"}>
                    <AiFillPlayCircle color="green" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TrendsTitle(trend)}/>
                    <img src={trend.poster_path ? `${images}${trend.poster_path}` : NoImage} alt="NoImage" onClick={() => TrendsTitle(trend)}/>
                    <h3 id={trend.title > 28 ? "smaller-Text" : ""} className={toggle? "mainColor" : "secondaryColor"}>{trend.title}{trend.name}</h3>
                  </div>
                </>
              )
            })}
          {trailer ? console.log : <TrailerTrending trendTitle={trendTitle}/>}
          <AiOutlineClose id={trailer ? "Nothing" : "Exit1" } className={toggle ? "DarkTheme" : "LightThemeClose" } fontSize={45} color={toggle ? "white" : "black"} cursor={"pointer"} onClick={() => setTrailer(true)}/>
        </div>
      </div>
    </>
  )
}
export default Trending;