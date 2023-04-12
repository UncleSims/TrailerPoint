import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import "../Styles/NavBarStyle.css";
import MobileNav from "./MobileNav";
import { ContainerContext } from "./ContainerContext";

const NavBar = () => {
  const { toggle, handleClick, inputChange, onClick } =
    useContext(ContainerContext);

  const [nav, setNav] = useState(false);
  const navClick = () => {
    setNav(!nav);
  };
  const navClose = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav id={toggle ? "" : "navBarColor"}>
        <div className="nav-options">
          <h1>
            <Link className="logoText" id={toggle ? "" : "heading"} to="/">
              TRAILERPOINT
            </Link>
          </h1>

          <div className="links">
            <Link to="/" onClick={onClick}>
              <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
            </Link>
            <Link to="TvShows" onClick={onClick}>
              <span id={toggle ? "Movies" : "MoviesLight"}>Shows</span>
            </Link>
            <Link to="Trending" onClick={onClick}>
              <span id={toggle ? "Movies" : "MoviesLight"}>Trending</span>
            </Link>
          </div>
        </div>
        <div
          onClick={navClick}
          // className="relative pr-4 cursor-pointer text-gray-500 z-10 md:hidden"
          className="mobileNavHandle"
        >
          {!nav &&  <FaBars size={30} />}
          {/* <FaTimes size={30} /> : */}
        </div>
        {nav && <MobileNav nav={nav} navClose={navClose}  />}
        <div className="input-group">
          <input
            type="text"
            placeholder="Search for your favorite movies"
            onChange={inputChange}
          />
          <HiSearch fontSize={21} color="black" id="search" />
          <div id="Color-switcher" onClick={handleClick}>
            <div className="toggle-handle">
              <div
                id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
