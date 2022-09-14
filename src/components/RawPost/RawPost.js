import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import "./RawPost.css"
import { imageUrl, API_KEY } from '../../constant/Constant'
import axios from '../../axios'
function RawPost(props) {
  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovie(response.data.results)
    }).catch(err => {
      //dfgh
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    
  };
  const handleMovie = (id) => {
    console.log('id:', id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      console.log(response.data.results);
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
        console.log(urlId);
      } else {
        console.log("Empty")

      }
    })
  }
  return (
    <div className='rawpost'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj) =>

          <img onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />

        )}

      </div>

      {urlId && <ReactPlayer url= {`http://youtube.com/watch?v=${urlId.key}`} width="100%" allow='autoplay; encrypted-media' />}

    </div>
  )
}

export default RawPost