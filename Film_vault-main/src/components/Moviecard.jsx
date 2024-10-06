import React, { useState } from "react";

function Moviecard({movieObj,poster_path,name,handlewatchlist,removewatchlist,watchlist}) {

  function doesContain(movieObj)
  {
    for(let i=0;i<watchlist.length;i++)
      {
        if(watchlist[i].id==movieObj.id)
          return true;
      }
      return false
  }
  return (
    <>
      <div className="flex justify-center m-3 border border-[#5E5C6C] border-4 p-[0.2rem] rounded">
      <div
        className="font-poppins h-[35vh] w-[12vw] bg-center bg-cover rounded hover:cursor-pointer hover:scale-95 duration-200 flex flex-col justify-between items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj)?(
            <div onClick={()=>removewatchlist(movieObj)} className="text-[15px] bg-gray-600/70 rounded-full h-[35px] flex items-center text-white px-[0.35rem] m-1 hover:cursor-pointer hover:scale-110 text-center">✅</div>
        ):(
          <div onClick={()=>handlewatchlist(movieObj)} className="text-[35px] bg-gray-600/70 rounded-full h-[35px] flex items-center text-white px-[0.35rem] m-1 hover:cursor-pointer hover:scale-110 text-center">+</div>
        )}
        
        <div className='bg-gray-800/40 text-white rounded text-center w-full flex justify-center text-sm'>
          {name}
        </div>
      </div>
      </div>
    </>
  );
}

export default Moviecard;
