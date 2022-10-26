import React ,{useEffect} from 'react'
import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import Movie from './Movie';
//9a88b33f
const APÏ_URL='http://www.omdbapi.com?apikey=9a88b33f'

const App=()=> {
  const[movies,setMovies]=useState([])
  const [search,setSearch]=useState('');
  const movie=
  {Title: 'Batman Begins',
   Year: '2005', 
   imdbID: 'tt0372784', 
   Type: 'movie', 
   Poster: 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2…zQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  }  
    const searchMovies =async (title)=>{
        const response = await fetch(`${APÏ_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
        console.log(movie)
    }
    useEffect(()=>{
        searchMovies('movie')
    
    },[])
  return (
    <div className='container'>
           <h1 className="text-center title text-capitalize mt-5 alert text-light ">ChAiMoViES</h1>
           <div className="input-group">
          <input 
          type="text" 
          placeholder='Search for movies' 
          className="form-control" 
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}/>
              <div className="input-group-addon text-center">
              <BsSearch onClick={()=>{searchMovies(search)}}/>
             </div>
          
          </div>
          <div className="container d-inline-flex flex-wrap mr-auto mt-4">
            {
              movies.map((movie,index)=>(
                <div key={index} className="card  card-md ml-auto rounded alert alert-danger  col-6 col-md-4  ">
                  
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt="" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">
                {movie.Title}

              </h3>
              <p>{movie.Type}</p>
            </div>

          </div>
              ))
            }
          
          </div>
          
          {/* <Movie movie={movie}/> */}

   
  </div>
  )
}

export default App