import React, { Component } from "react";
import MoviesData from "../Data/MoviesData";

import Moviedetail from "./MovieDetail";

class MovieList extends Component {
  render() {
    return (
      <div>
        {MoviesData.map((item, index) => {
          return <Moviedetail post={item} key={`post-list-key ${index}`} />;
        })}
      </div>
    );
  }
}

export default MovieList;
