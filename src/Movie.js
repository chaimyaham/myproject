import React from 'react'

export default function Movie({movie}) {
  return (
    <div>
        <div className="card" style="width: 18rem;">
            <div>
                <p>{movie.Year}</p>
            </div>
     <img className="card-img-top" src={movie.Poster!=='N/A' ?  movie.Poster:'https://via.placeholder.com/400'} alt="Card image cap"/>

    <div className="card-body">
    <h5 className="card-title">{movie.Title}</h5>

    <p className="card-text">{movie.Type}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}
