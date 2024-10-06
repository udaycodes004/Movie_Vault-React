import React, { useEffect, useState } from "react";
import sortBy from "sort-by";
import genreids from "../Utilities/genreids";

function WatchlistC({ watchlist, setWatchlist,removewatchlist }) {
  const [search, setSearch] = useState("");
  const [genrelist, setgenrelist] = useState(["All Genres"]);
  const [currentg, setcurrentg] = useState("All Genres");
  let handlechange = (e) => {
    setSearch(e.target.value);
  };
  let handlediv = (genre) => {
    setcurrentg(genre);
  };
  let Increasingsort = () => {
    let increasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...increasing]);
  };
  let Decreasingsort = () => {
    let decreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...decreasing]);
  };
  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp=new Set(temp)
    setgenrelist(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);
  return (
    <>
      <div className="flex justify-center my-3">
        {genrelist.map((genre) => {
          return (
            <div
              onClick={() => handlediv(genre)}
              className={
                currentg == genre
                  ? "flex h-[35px] w-[100px] items-center justify-center bg-blue-600 rounded-[1rem] text-l m-4 text-white"
                  : "flex h-[35px] w-[100px] justify-center bg-gray-600/40 rounded-[1rem] text-l m-4 text-black items-center"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center flex-wrap my-3 ">
        <input
          className="border rounded bg-gray-300 border-gray-700 h-[2.3rem] w-[20rem] px-2"
          placeholder="Search For Movies.."
          onChange={handlechange}
          type="text"
        />
      </div>

      <div className="flex  box-border">
        <table className="border border-gray-500 m-8 border-b-2 w-full table-auto p-5">
          <thead>
            <tr className="border border-gray-700 py-2">
              <th>Name</th>
              <th className="flex justify-center gap-2">
                <div onClick={Decreasingsort}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Ratings</div>
                <div onClick={Increasingsort}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {watchlist.filter((movieObj)=>{
              if(currentg=='All Genres')
                return true
              else
                return genreids[movieObj.genre_ids[0]]==currentg
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[10rem] w-[8rem]"
                        src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td>
                      <div onClick={()=>removewatchlist(movieObj)}className="bg-red-700 text-white text-center rounded-lg cursor-pointer w-[80px]">
                        Delete
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchlistC;
