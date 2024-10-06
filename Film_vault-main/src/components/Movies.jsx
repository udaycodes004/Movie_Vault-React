import React, { Component, useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({handlewatchlist,removewatchlist,watchlist}) => {
  const [Movies, setMovies] = useState([]);

  const [PageNo, setPageNo] = useState(1);

  const Increment = () => {
    setPageNo(PageNo + 1);
  };
  const Decrement = () => {
    if (PageNo == 1) setPageNo(PageNo);
    else setPageNo(PageNo - 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7cb803d0c1ad7fa543cd6da83c096c9f&language=en-US&page= ${PageNo}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [PageNo]);

  return (
    <>
    <div className="flex w-full justify-center my-4 text-2xl font-poppins"><h1>Add your Favorite movies here </h1></div>
      <div className="flex flex-wrap justify-center border border-white mx-4 p-3 rounded-xl">
        {Movies.map((movieObj) => {
          return (
            <Moviecard
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handlewatchlist={handlewatchlist}
              removewatchlist={removewatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <div>
        <Pagination
          pageno={PageNo}
          Increment={Increment}
          Decrement={Decrement}
        />
      </div>
    </>
  );
};

export default Movies;
