import 'whatwg-fetch'
import React from 'react'
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      value: "",
      reviews: []
    }
  }

  searchFetch(value){
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/${value}.json?api-key=bc5664b93f1a479986bb67d4ad0a00b4`)
    .then( (res) => res.json() )
    .then( (data) => this.setState({reviews: data.results}))
  }

  handleSubmit(e){
    e.preventDefault()
    this.searchFetch(this.state.value)
  }

  handleChange(e){
    let input = e.target.value
    this.setState({
      value: input
    })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
          <input type="submit"/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
