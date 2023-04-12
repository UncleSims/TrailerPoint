import { useContext } from "react";
import { ContainerContext } from "./ContainerContext";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";

const MobileNav = ({ nav, navClose }) => {
  const { toggle, handleClick, inputChange, onClick } =
    useContext(ContainerContext);
  return (
    <nav className="mobile-nav">
      <div className="mobileNavOptions">
        <div className="navContainer">
          <div className="mobileNavIcons">
            <h1>
              <Link
                className="mobilelogoText"
                id={toggle ? "" : "heading"}
                to="/"
              >
                TRAILERPOINT
              </Link>
            </h1>

            <div onClick={navClose} className="mobileNavHandleClose">
              {nav && <FaTimes size={30} />}
            </div>
          </div>

          <div className="mobileInputGroup">
            <input
              type="text"
              placeholder="Search for your favorite movies"
              onChange={inputChange}
            />
            <HiSearch fontSize={21} color="black" id="searchIcon" />
          </div>
        </div>

        <div className="mobileLinks">
          <Link to="/" onClick={(onClick, navClose)}>
            <span
              className="mobileLinkSpan"
              id={toggle ? "Movies" : "MoviesLight"}
            >
              Movies
            </span>
          </Link>
          <Link to="TvShows" onClick={(onClick, navClose)}>
            <span
              className="mobileLinkSpan"
              id={toggle ? "Movies" : "MoviesLight"}
            >
              Shows
            </span>
          </Link>
          <Link to="Trending" onClick={(onClick, navClose)}>
            <span
              className="mobileLinkSpan"
              id={toggle ? "Movies" : "MoviesLight"}
            >
              Trending
            </span>
          </Link>
        </div>
      </div>

      {/* <div className="input-group">
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
      </div> */}
    </nav>
  );
};

export default MobileNav;
