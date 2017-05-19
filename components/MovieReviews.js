import React from 'react'

function MovieReviews(props){
  if (props.reviews) {
    const list = props.reviews.map( (movie) => (<div className="review"> <h4> {movie.display_title} </h4><br></br> <p>{movie.headline}</p> <br/> </div> ))
    return (
      <div className="review-list">
        {list}
      </div>
    )
  }else{
    <div>
      <p>
        NO THANK YOU GO AWAY
      </p>
    </div>
  }
}

MovieReviews.defaultProps ={
  reviews: []
}
export default MovieReviews
