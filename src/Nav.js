import React from "react";
import { useState, useEffect, useRef } from "react";
import MovieCont from "./components/MovieCont";

const Nav = () => {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [vids, setVids] = useState([]);
  const API_KEY = "dfc3cc04";
  //http://www.omdbapi.com/?apikey={API_KEY}&s=
  const tmdbAPI = "e4a7853b52909dd368208439697efacd";
  // const tmdbAPI2 = "0dee9a45a0c2d9f45040d41ad779a4c8";
  const inputRef = useRef();

  useEffect(() => {
    // getRes();
    // setVids([]);
    // getTmdbTvRes();
    // getTmdbMovieRes();
  }, []);

  useEffect(() => {
    // getRes();
    // setVids([]);

    getTmdbTvRes();
    getTmdbMovieRes();
    setVids(movies.concat(series));

    // console.log(vids);
  }, [search]);

  useEffect(() => {
    vids.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
    });
  }, [vids]);

  // const getRes = async () => {
  //   const results = await fetch(
  //     `https://www.omdbapi.com/?apikey=${API_KEY}&s=${
  //       search == "" ? "" : search
  //     }`
  //   );
  //   const data = await results.json();

  //   if (data.Search !== undefined) {
  //     const filteredData = data.Search.filter((vid) => {
  //       return vid.Poster !== "N/A";
  //     });

  //     // console.log(data.Search);
  //     //   console.log(data.Search);
  //     if (filteredData !== undefined) {
  //       setVids(filteredData);
  //     }
  //   }
  // };

  const getTmdbTvRes = async () => {
    // const results = await fetch(
    //   `https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPI}&query=${
    //     search == "" ? "" : search
    //   }`
    // );

    if (search !== "") {
      const results = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${tmdbAPI}&query=${search}`
      );
      const data = await results.json();

      if (data.results !== undefined) {
        const filteredData = data.results.filter((vid) => {
          return (
            vid.poster_path !== null &&
            vid.poster_path !== undefined &&
            vid.poster_path !== ""
          );
        });

        // console.log(filteredData);
        // console.log(data.Search);
        //   console.log(data.Search);

        // setVids([]);

        if (filteredData !== undefined) {
          // setVids((prevVids) => [...prevVids, filteredData]);
          setSeries(filteredData);
        }
      }
    }
  };

  const getTmdbMovieRes = async () => {
    // const results = await fetch(
    //   `https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPI}&query=${
    //     search == "" ? "" : search
    //   }`
    // );

    if (search !== "") {
      const results = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPI}&query=${search}`
      );
      const data = await results.json();

      if (data.results !== undefined) {
        const filteredData = data.results.filter((vid) => {
          return (
            vid.poster_path !== null &&
            vid.poster_path !== undefined &&
            vid.poster_path !== ""
          );
        });

        // console.log(filteredData);
        // console.log(data.Search);
        //   console.log(data.Search);

        // setVids([]);

        if (filteredData !== undefined) {
          // setVids((prevVids) => [...prevVids, filteredData]);
          setMovies(filteredData);
        }
      }
    }
  };

  const clickHandler = () => {
    setSearch("");
    inputRef.current.focus();
  };

  return (
    <div className="nav">
      <h1>Search any movie, tv show or anime</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={search}
          ref={inputRef}
          spellCheck="false"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <i
          className="fa-solid fa-x"
          onClick={() => {
            clickHandler();
          }}
        ></i>
      </form>
      <h2>Searching for results matching:</h2>
      <p>{search}</p>
      <MovieCont vids={vids} />
      {/* <div className="btns">
        <button>Movies</button>
        <button>Tv Shows</button>
        <button>Anime</button>
      </div> */}
    </div>
  );
};

export default Nav;
