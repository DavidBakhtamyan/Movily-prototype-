import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTv = createAsyncThunk(
    'tv/fetchTv',
    async function(page){
        const response = await axios.get('https://api.themoviedb.org/3/discover/tv',{
            params: {
                include_adult: 'false',
                include_null_first_air_dates: 'false',
                language: 'en-US',
                page: page,
                sort_by: 'popularity.desc',
                with_original_language: 'en'
              },
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTcwMGY3OGEwZTg2NmI5ZDliMWM0YWI2ZTZkZDlkZCIsInN1YiI6IjY0YTE5YjFkYzM5MGM1MDEyZDE2ZGUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4lIlGHEtISuKaEkejNFN7jw1e36NLUGEwDE27Nwssw'
              }
        })
        return response.data
    }
)