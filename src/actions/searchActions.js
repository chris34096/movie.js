import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./types";
import axios from "axios";

import { movies$ } from "../components/Data/Movies";

export const searchMovie = text => dispatch => {
  console.log(searchMovie);
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  movies$
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )

    .catch(err => console.log(err));
};

export const fetchMovie = text => dispatch => {
  console.log("toto");
  movies$.then(function(value) {
    console.log(value);
  });
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
