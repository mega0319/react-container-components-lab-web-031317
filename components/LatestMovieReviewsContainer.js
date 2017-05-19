import 'whatwg-fetch'
import React from 'react'
import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=bc5664b93f1a479986bb67d4ad0a00b4')
    .then( (res) => res.json() )
    .then( (data) => this.setState({reviews: data.results}))
  }



  render(){
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
