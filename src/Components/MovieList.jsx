import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

function MovieList({genreId, index_}) {

    const [movieList,setMovieList] = useState([])
    const elementRef = useRef(null);
    
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
    const sliderRight=(element)=>{
      element.scrollLeft+=500
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=500
    }
  return (
    <div className='relative'>
      <IoChevronBackOutline className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_%3==0 ? `mt-[80px]` : `mt-[150px]`} `} onClick={()=>sliderLeft(elementRef.current)}/>
    
    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5'>
      {movieList.map((item,index)=>(
        <>
          {index_%3 == 0? <HrMovieCard movie={item}/> : <MovieCard movie={item} key={index}/>}
          
        </>
      ))}
    </div>
    <IoChevronForwardOutline className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${index_%3==0 ? `mt-[80px]` : `mt-[150px]`}`} onClick={()=>sliderRight(elementRef.current)}/>
    </div>
  )
}

export default MovieList
