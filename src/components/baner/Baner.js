import React, { useEffect } from 'react'
import {API_KEY, imageUrl} from '../../constant/Constant'
import axios  from '../../axios'
import "./Baner.css"
import { useState } from 'react'
function Baner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[8])
      setMovie(Response.data.results[8])
})
  }, [])
  
  return (
    <div
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path :""})`}}
    className='baner'>
        <div className='content'>
        <h1 className='title'> {movie ? movie.original_title :""} </h1>
       <div className='baner_button'>
        <button className='button'>
Play
       </button>
       <button className='button'>
My list
       </button>
   
         </div> 
         <h1 className='descryption'>{movie? movie.overview : ""}</h1>
       
       </div>
       <div className="fade_bottom">

       </div>
    </div>
  )
}

export default Baner