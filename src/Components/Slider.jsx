import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import axios from "axios";
// const IMG_BASE_URL="https://api.themoviedb.org/3/movie"
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
const screenwidth = window.innerWidth;
function Slider() {
  const [movielist, setmovielist] = useState([]);
  const elementRef=useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=7f803f6abb22fd06057fed554c09cf75`
      );
      console.log(data.results);
      setmovielist(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenwidth-110;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenwidth-110;
    }
  };

  return (
    <div>
      <div className="relative">
      <GoChevronLeft  className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[230px] bg-transparent cursor-pointer" onClick={sliderLeft}/>
      <GoChevronRight className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[230px] right-0 bg-transparent cursor-pointer" onClick={sliderRight}/>
      </div>
    <div className=" mt-[10px] flex overflow-x-auto px-16 py-4 rounded-lg scrollbar-hide scroll-smooth">
      {movielist.map((item, index) => {
        const imageUrl = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`;
        console.log(imageUrl); // Check if the URL looks correct

        return (
          <img
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            className="min-w-full md:h-[450px] object-cover object-left-top  mr-5 scrollbar-hide rounded scrollable-container hover:border-[2px] border-gray-400 transition-all duration-100 ease-in" ref={elementRef}
          />
        );
      })}
    </div>
    
    </div>
  );
}

export default Slider;