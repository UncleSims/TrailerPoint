
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';
import '../Styles/NavBarStyle.css';

import { ContainerContext } from './ContainerContext';


const NavBar = () => {
  const {toggle, handleClick, inputChange } = useContext(ContainerContext)
 
    return ( 
  
       <>
        <nav id={toggle ? "" : "navBarColor"}>
            <div className="nav-options">
                <h1>
                <Link className="logoText" id={toggle ? "" : "heading"} to="/">TRAILERPOINT</Link>
                </h1>
                
                <Link to="/"><span id={toggle ? "Movies" : "MoviesLight"}>Movies</span></Link>
                <Link to="TvShows"><span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span></Link>
                <Link to="Trending"><span id={toggle ? "Movies" : "MoviesLight"}>Trending</span></Link>
            </div>
            
            <div className="input-group">
                <input type="text" placeholder="Search for your favorite movies" onChange={inputChange}/>
                <HiSearch fontSize={21} color="black" id="search"/>
                <div id="Color-switcher" onClick={handleClick}>
                <div id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}></div>
                 </div>
            </div>
        </nav>  
        
        </>


     );
}


export default NavBar ;