import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const fetchMovie = createAsyncThunk(
  'movie/fetchMovie',
  async function(args){
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: args.page,
    sort_by: 'popularity.desc',
    with_genres: args.genre.join(','),
    'vote_average.gte': 7
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTcwMGY3OGEwZTg2NmI5ZDliMWM0YWI2ZTZkZDlkZCIsInN1YiI6IjY0YTE5YjFkYzM5MGM1MDEyZDE2ZGUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4lIlGHEtISuKaEkejNFN7jw1e36NLUGEwDE27Nwssw'
  }
    })
    return response.data
  }
)


//!%2C