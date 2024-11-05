import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TopRated() {
    const [movielist, setmovielist] = useState([]);
    useEffect(() => {
      getTopRatedMovies();
    }, []);
  
    async function getTopRatedMovies() {
      try {
        const Data = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=7f803f6abb22fd06057fed554c09cf75`
        );
  
        setmovielist(Data.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div className=" w-[100%] h-[350px] mt-[20px] mb-[6px]">
        <h1 className="text-[30px] font-bold text-white pl-[42px] pt-[10px] mb-[10px] mt-[80px]">
          Top Rated Movies
        </h1>
        <div className="border border-transparent w-[100%]  flex gap-[12px] overflow-x-auto scroll-none pl-[42px] pr-[50px] ">
          {movielist.map((item, index) => {
              if (index==13||index==14||index==16||index==19)
                return;
            return (
              <div className="flex flex-col items-center  ">
                  
                <img className="h-[330px] min-w-[230px] object-cover cursor-pointer border-[2px] border-transparent hover:border-gray-400 transition-all duration-200 ease-linear rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                />
                <h1 className="text-white text-[18px] font-semibold mt-3">{item.original_title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default TopRated