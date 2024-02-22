import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovieGenres = createAsyncThunk(
    "movieGenres/fetchMovieGenres",
    async function(){
        const request = await axios.get("https://api.themoviedb.org/3/genre/movie/list",{
            params: {language: 'en'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTcwMGY3OGEwZTg2NmI5ZDliMWM0YWI2ZTZkZDlkZCIsInN1YiI6IjY0YTE5YjFkYzM5MGM1MDEyZDE2ZGUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4lIlGHEtISuKaEkejNFN7jw1e36NLUGEwDE27Nwssw'
            }
        })
        return request.data
    }
)