import React, { Component } from "react";
import MoviesData from "../Data/MoviesData";

class MovieDetail extends Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        <h1>{post.title}</h1>
        <img src={post.poster_src} alt="Poster " />
        <p>{post.content}</p>
        <p>{post.category}</p>
      </div>
    );
  }
}

export default MovieDetail;
